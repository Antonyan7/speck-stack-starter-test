// script/get-domain.ts
import fs from 'fs';
import JSON5 from 'json5';

try {
	const raw = fs.readFileSync('wrangler.jsonc', 'utf-8');
	const json = JSON5.parse(raw);

	const domain = json.routes?.[0]?.pattern ?? 'placeholder.domain';
	console.log(domain);
} catch (err) {
	console.error('⚠️ Failed to parse wrangler.jsonc:', err);
	console.log('placeholder.domain');
	process.exit(0);
}
