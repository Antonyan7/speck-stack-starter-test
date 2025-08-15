import fs from 'fs';
import path from 'path';
import JSON5 from 'json5';

// Minimal interactive prompt using stdin/stdout (no extra deps)
async function prompt(question: string, defaultValue?: string): Promise<string> {
	process.stdout.write(`${question}${defaultValue ? ` (${defaultValue})` : ''}: `);
	return new Promise((resolve) => {
		process.stdin.resume();
		process.stdin.setEncoding('utf8');
		process.stdin.once('data', (data) => {
			process.stdin.pause();
			resolve((data || '').toString().trim() || (defaultValue ?? ''));
		});
	});
}

function replaceInFile(filePath: string, replacements: Array<{ from: RegExp; to: string }>) {
	if (!fs.existsSync(filePath)) return;
	const original = fs.readFileSync(filePath, 'utf-8');
	let updated = original;
	replacements.forEach(({ from, to }) => {
		updated = updated.replace(from, to);
	});
	if (updated !== original) {
		fs.writeFileSync(filePath, updated, 'utf-8');
		console.log(`Updated: ${filePath}`);
	}
}

function replaceNthOccurrence(filePath: string, pattern: RegExp, n: number, to: string) {
	const original = fs.readFileSync(filePath, 'utf-8');
	let match: RegExpExecArray | null;
	let count = 0;
	pattern.lastIndex = 0;
	while ((match = pattern.exec(original)) !== null) {
		count++;
		if (count === n) {
			const before = original.slice(0, match.index);
			const after = original.slice(match.index + match[0].length);
			const updated = before + to + after;
			fs.writeFileSync(filePath, updated, 'utf-8');
			console.log(`Updated (nth=${n}): ${filePath}`);
			return true;
		}
	}
	return false;
}

function updatePackageName(pkgPath: string, newName: string) {
	const original = fs.readFileSync(pkgPath, 'utf-8');
	const updated = original.replace(/^([ \t]*"name"\s*:\s*)"[^"]*"/m, `$1"${newName}"`);
	if (updated !== original) {
		fs.writeFileSync(pkgPath, updated, 'utf-8');
		console.log('Updated: package.json name');
	}
}

async function main() {
	console.log('SPECK template setup');

	const root = process.cwd();
	const pkgPath = path.join(root, 'package.json');
	const wranglerPath = path.join(root, 'wrangler.jsonc');
	const headerPath = path.join(root, 'src', 'routes', 'Header.svelte');

	// Read existing values
	const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8')) as { name: string };
	const wranglerRaw = fs.readFileSync(wranglerPath, 'utf-8');
	const wrangler = JSON5.parse(wranglerRaw) as any;

	const currentName = wrangler.name as string;
	const currentProdPattern = wrangler.routes?.[0]?.pattern as string | undefined;
	const currentProdZone = wrangler.routes?.[0]?.zone_name as string | undefined;
	const currentStagingPattern = wrangler.env?.staging?.routes?.[0]?.pattern as string | undefined;
	const currentStagingZone = wrangler.env?.staging?.routes?.[0]?.zone_name as string | undefined;

	const projectName = await prompt('Project name (package.json, wrangler name)', pkg.name);
	const cfAccountId = await prompt(
		'Cloudflare account_id (wrangler.jsonc)',
		(wrangler.account_id as string) ?? ''
	);
	const cfRoute = await prompt(
		'Primary route domain (wrangler.jsonc routes[0].pattern)',
		currentProdPattern ?? ''
	);
	const cfZone = await prompt(
		'Zone name (wrangler.jsonc routes[0].zone_name)',
		currentProdZone ?? ''
	);
	const stagingRoute = await prompt(
		'Staging route domain (wrangler.env.staging.routes[0].pattern)',
		currentStagingPattern ?? ''
	);
	const stagingZone = await prompt(
		'Staging zone name (wrangler.env.staging.routes[0].zone_name)',
		currentStagingZone ?? cfZone
	);
	const defaultStagingName =
		(wrangler.env?.staging?.name as string | undefined) ?? `${projectName}-staging`;
	const stagingName = await prompt(
		'Staging worker name (wrangler.env.staging.name)',
		defaultStagingName
	);

	// Robustly update package.json name (preserve indentation)
	updatePackageName(pkgPath, projectName);

	// Update wrangler.jsonc top-level name
	if (currentName && projectName && currentName !== projectName) {
		replaceInFile(wranglerPath, [
			{ from: new RegExp(`"name"\s*:\s*"${currentName}"`), to: `"name": "${projectName}"` }
		]);
	}

	// Update account_id only if provided (non-empty)
	if (cfAccountId) {
		replaceInFile(wranglerPath, [
			{ from: /"account_id"\s*:\s*"[^"]+"/, to: `"account_id": "${cfAccountId}"` }
		]);
	}

	// Update prod route pattern and zone (replace first occurrence)
	if (currentProdPattern && cfRoute && currentProdPattern !== cfRoute) {
		replaceNthOccurrence(
			wranglerPath,
			/"pattern"\s*:\s*"[^"]+"(?=,\s*\n\s*"custom_domain")/g,
			1,
			`"pattern": "${cfRoute}"`
		);
	}
	if (currentProdZone && cfZone && currentProdZone !== cfZone) {
		replaceNthOccurrence(wranglerPath, /"zone_name"\s*:\s*"[^"]+"/g, 1, `"zone_name": "${cfZone}"`);
	}

	// Ensure staging name exists inside env.staging
	let wranglerText = fs.readFileSync(wranglerPath, 'utf-8');
	if (!/"env"\s*:\s*{[\s\S]*"staging"\s*:\s*{[\s\S]*"name"\s*:/.test(wranglerText)) {
		wranglerText = wranglerText.replace(
			/("staging"\s*:\s*{)(\s*\n)/,
			`$1\n\t\t\t"name": "${stagingName}",$2`
		);
		fs.writeFileSync(wranglerPath, wranglerText, 'utf-8');
		console.log('Inserted env.staging.name');
	} else if (stagingName) {
		wranglerText = wranglerText.replace(
			/("staging"[\s\S]*?"name"\s*:\s*")[^"]+"/,
			`$1${stagingName}"`
		);
		fs.writeFileSync(wranglerPath, wranglerText, 'utf-8');
		console.log('Updated env.staging.name');
	}

	// Update staging route and zone (replace second occurrence)
	if (stagingRoute) {
		replaceNthOccurrence(
			wranglerPath,
			/"pattern"\s*:\s*"[^"]+"(?=,\s*\n\s*"custom_domain")/g,
			2,
			`"pattern": "${stagingRoute}"`
		);
	}
	if (stagingZone) {
		replaceNthOccurrence(
			wranglerPath,
			/"zone_name"\s*:\s*"[^"]+"/g,
			2,
			`"zone_name": "${stagingZone}"`
		);
	}

	// Update logo alt text placeholder
	replaceInFile(headerPath, [
		{ from: /alt="Website Logo Placeholder"/g, to: `alt="${projectName} Logo"` }
	]);

	// Skipped: app.html Umami id handled by CI; get-domain.ts fallback remains default

	console.log(
		'Setup complete. Review changes in git and adjust any remaining placeholders as needed.'
	);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
