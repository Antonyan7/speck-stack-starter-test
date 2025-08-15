## SPECK Template

SvelteKit + Cloudflare Workers starter with Tailwind v4, shadcn/bits-ui, Superforms, Paraglide i18n, and Bun.

### Prerequisites

- Bun 1.x (`curl -fsSL https://bun.sh/install | bash`)
- Cloudflare Wrangler 4.x (`bun add -g wrangler`)
- Cloudflare account for deploy/preview

### Quick start

```bash
# 1) Install deps
bun i

# 2) Start dev server
bun run dev
# (alias) bun dev

# 3) Open the app
# Vite will print the local URL in the terminal
```

### Environment

- If an `.env.example` exists, copy it to `.env` and fill values:

```bash
cp .env.example .env
```

- Scripts (like `script/translate.ts`) expect `DEEPL_API_KEY` in your shell or `.env` when run locally.
- Runtime app secrets for production (Cloudflare Workers) should be stored as Wrangler secrets:

```bash
wrangler secret put SLACK_WEBHOOK_URL
wrangler secret put EMAIL_FROM
wrangler secret put EMAIL_TO
```

### Scripts

```bash
# Dev
bun run dev

# Type-check / Lint / Format
bun run check
bun run lint
bun run format

# Build
bun run build

# Local worker preview (builds, then wrangler dev)
bun run preview

# Deploy to Cloudflare Workers
bun run deploy

# Generate Cloudflare types into src/ (optional)
bun run cf-typegen

# Translate missing messages using DeepL (requires DEEPL_API_KEY)
bun run translate
```

### Customize for your project

- Run the interactive setup to replace placeholders and configure Cloudflare:

```bash
bun run setup
```

This updates:

- `package.json` name
- `wrangler.jsonc` → `name`, `account_id`, `routes[0].pattern`, `routes[0].zone_name`, and optional staging route
- `src/routes/Header.svelte` → logo alt text

For new projects, in `wrangler.jsonc` you should change at minimum:

- **name**: Worker name
- **account_id**: Your Cloudflare account id
- **routes.pattern**: Your production domain (e.g. `example.com`)
- **routes.zone_name**: Your Cloudflare zone (e.g. `example.com`)
- Optionally set `env.staging.routes[0].pattern` for staging
  - The setup script also ensures `env.staging.name` and updates staging `zone_name`

### Deploy/Preview

- Wrangler uses `wrangler.jsonc` and the Cloudflare adapter’s worker bundle at `.svelte-kit/cloudflare/_worker.js`.
- Update `routes` in `wrangler.jsonc` to match your domain/zone.
- For preview: `bun run preview` (builds and runs `wrangler dev`).
- For deploy: `bun run deploy`.

### CI (GitHub Actions)

This repo ships with a CI workflow in `/.github/workflows/ci.yml` that:

- Deploys on pushes to `main` (production) and `staging` (staging)
- Looks up/creates an Umami site for your domain and injects the `data-website-id` into `src/app.html`
- Runs `bun run deploy` (and `bun run deploy --env staging` on the `staging` branch)

#### Required repository secrets

Add these in your GitHub repository under Settings → Secrets and variables → Actions → New repository secret:

- `CLOUDFLARE_API_TOKEN`: Cloudflare API token with the "Edit Cloudflare Workers" template (or equivalent scopes to deploy Workers and edit routes) for the target account
- `UMAMI_BASE_URL`: Base URL of your Umami instance (e.g. `https://umami.example.com`)
- `UMAMI_USERNAME`: Umami user name (for the above instance)
- `UMAMI_PASSWORD`: Umami password

#### Cloudflare/Wrangler prerequisites

- Ensure `wrangler.jsonc` is configured with your Cloudflare `account_id` and a production route under `routes[0].pattern`/`zone_name`. The workflow reads this domain to manage the Umami site.
- If you use a staging environment, set `env.staging.routes[0].pattern` and `zone_name` in `wrangler.jsonc`. Deploys from the `staging` branch will target this environment via `--env staging`.

#### Umami snippet in the app

`src/app.html` includes the Umami script with `data-website-id="placeholder"`. The workflow replaces this placeholder at build time with the site ID from Umami and rewrites the script `src` based on `UMAMI_BASE_URL`. If you do not use Umami, remove the script tag from `src/app.html` and optionally delete the related steps in `/.github/workflows/ci.yml`.

#### Notes

- The workflow sets up Bun with `oven-sh/setup-bun@v1` and runs `bun install`.
- The workflow triggers on `push` to `main` and `staging`, and on `pull_request` (PRs run but do not deploy).

### Stack

- SvelteKit 2 + Svelte 5, Vite 7
- Cloudflare Workers via `@sveltejs/adapter-cloudflare` + Wrangler
- Tailwind CSS v4 (+ `@tailwindcss/forms`, `@tailwindcss/typography`, `tailwind-variants`, `tailwind-merge`, `tw-animate-css`)
- UI: `@shadcn/svelte` patterns via `bits-ui`, `@lucide/svelte`
- Forms/validation: `sveltekit-superforms`, `formsnap`, `valibot` (see `src/routes/contactForm/contactSchema.ts`)
- i18n: inlang Paraglide (`@inlang/cli`, `@inlang/paraglide-js`)
- Media/UI extras: `embla-carousel-svelte` (+ `embla-carousel-autoplay`), `@unpic/svelte`, `mode-watcher`

### shadcn-svelte usage

- Components are installed under `src/lib/shadcn/components/ui/*` per `components.json`.
- Example import:

```html
<script lang="ts">
	import { Button } from '$lib/shadcn/components/ui/button';
</script>

<button variant="secondary">Click me</button>
```

- To add more components via the CLI:

```bash
# Open the add UI and pick components
bunx shadcn-svelte@latest add
```

### Forms: Superforms + Valibot

- Files:
  - Schema: `src/routes/contactForm/contactSchema.ts`
  - Client component: `src/routes/contactForm/contactForm.svelte`
  - Server load/actions: `src/routes/+page.server.ts`

- Server example:

```ts
// src/routes/+page.server.ts
import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { contactSchema } from './contactForm/contactSchema';

export const load = async () => {
	const contactForm = await superValidate(valibot(contactSchema));
	return { contactForm };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, valibot(contactSchema));
		if (!form.valid) return { status: 400, form };
		return { form };
	}
};
```

- Client example:

```html
<script lang="ts">
	import * as Form from '$lib/shadcn/components/ui/form/index.js';
	import { Input } from '$lib/shadcn/components/ui/input/index.js';
	import { Textarea } from '$lib/shadcn/components/ui/textarea/index.js';
	import { Button } from '$lib/shadcn/components/ui/button';
	import { contactSchema, type ContactSchema } from './contactSchema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';

	let { data }: { data: { form: SuperValidated<Infer<ContactSchema>> } } = $props();
	const { form, enhance } = superForm(data.form, { validators: valibotClient(contactSchema) });
	const { form: formData } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="firstName">
		<Form.Control>
			{#snippet children({ props })}
			<Form.Label>First name</Form.Label>
			<input {...props} bind:value="{$formData.firstName}" />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button>Send</Form.Button>
	<!-- See full example in `src/routes/contactForm/contactForm.svelte` -->
</form>
```

This wiring gives client-side validation via Valibot and server-side safety via Superforms, while using shadcn-svelte UI primitives.

### VS Code extensions

- **Svelte**: `svelte.svelte-vscode`
- **Tailwind CSS IntelliSense**: `bradlc.vscode-tailwindcss`
- **Paraglide (inlang / Sherlock)**: `inlang.vs-code-extension`
- **ESLint**: `dbaeumer.vscode-eslint`
- **Prettier**: `esbenp.prettier-vscode`

Install all at once:

```bash
code --install-extension svelte.svelte-vscode bradlc.vscode-tailwindcss inlang.vs-code-extension dbaeumer.vscode-eslint esbenp.prettier-vscode
```

Opening the workspace will also prompt to install recommendations from `.vscode/extensions.json`.

### Useful links

- **SvelteKit**: [kit.svelte.dev/docs](https://kit.svelte.dev/docs)
- **Svelte 5**: [svelte.dev/docs](https://svelte.dev/docs)
- **Vite**: [vitejs.dev/guide](https://vitejs.dev/guide)
- **Tailwind CSS v4**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Cloudflare Workers**: [developers.cloudflare.com/workers](https://developers.cloudflare.com/workers)
- **Wrangler**: [developers.cloudflare.com/workers/wrangler](https://developers.cloudflare.com/workers/wrangler)
- **Adapter Cloudflare**: [kit.svelte.dev/docs/adapter-cloudflare](https://kit.svelte.dev/docs/adapter-cloudflare)
- **Paraglide i18n**: [inlang.com/m/gerre34r/library-inlang-paraglideJs](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)
- **Superforms**: [superforms.rocks](https://superforms.rocks)
- **bits-ui (shadcn-svelte)**: [bits-ui.com](https://www.bits-ui.com)
- **@shadcn/svelte docs**: [shadcn-svelte.com](https://shadcn-svelte.com/)
- **Embla Carousel**: [embla-carousel.com](https://www.embla-carousel.com)
- **DeepL Node**: [github.com/DeepLcom/deepl-node](https://github.com/DeepLcom/deepl-node)
- **Valibot**: [valibot.dev](https://valibot.dev)
