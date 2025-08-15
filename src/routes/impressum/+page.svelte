<script lang="ts">
	import { m } from '$lib/paraglide/messages';

	// Placeholder values for message parameters
	const placeholderParams = {
		companyName: 'Your Company Name',
		companyDepartment: 'Your Department (Optional)',
		companyAddressLine1: 'Your Street Address',
		companyAddressLine2: 'Your Postal Code & City',
		companyPhoneTel: 'your-phone-tel',
		companyPhone: 'Your Phone',
		companyEmail: 'your-email@example.com',
		companyWebsiteUrl: 'https://www.example.com',
		companyWebsite: 'www.example.com',
		companyUid: 'Your VAT ID (Optional)',
		contactPersonName: 'Your Contact Person Name'
	};
</script>

<svelte:head>
	<title>{m.new_aqua_panther_enrich()}</title>
	<meta
		name="description"
		content={m.icy_heroic_squirrel_push()}
	/>
	<meta name="robots" content="noindex, follow" />
	<meta property="og:title" content={m.dry_great_tuna_trust()} />
	<meta
		property="og:description"
		content={m.clear_main_buzzard_blink()}
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="prose prose-zinc container mx-auto max-w-3xl py-8">
	{@html m.each_mellow_mantis_launch(placeholderParams)}
</div>
