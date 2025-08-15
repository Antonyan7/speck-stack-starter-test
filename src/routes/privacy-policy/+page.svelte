<script lang="ts">
	import { m } from '$lib/paraglide/messages';

	// Placeholder values for message parameters (subset of impressum)
	const placeholderParams = {
		companyName: 'Your Company Name',
		companyDepartment: 'Your Department (Optional)',
		companyAddressLine1: 'Your Street Address',
		companyAddressLine2: 'Your Postal Code & City',
		companyPhoneTel: 'your-phone-tel',
		companyPhone: 'Your Phone',
		companyWebsiteUrl: 'https://www.example.com',
		companyWebsite: 'www.example.com'
		// Note: companyEmail and companyUid are not used in this message
	};
</script>

<svelte:head>
	<title>{m.male_blue_myna_loop()}</title>
	<meta
		name="description"
		content={m.funny_arable_jurgen_adapt()}
	/>
	<meta name="robots" content="noindex, follow" />
	<meta property="og:title" content={m.simple_equal_skunk_trip()} />
	<meta
		property="og:description"
		content={m.proof_early_crossbill_promise()}
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="prose prose-zinc container mx-auto max-w-3xl py-8">
	{@html m.round_plain_parrot_race(placeholderParams)}
</div>
