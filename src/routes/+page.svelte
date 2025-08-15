<script lang="ts">
	import HeroItemCarousel from '$lib/components/HeroItemCarousel.svelte';
	import { m } from '$lib/paraglide/messages';
	import type { PageProps } from './$types';
	import ContactForm from './contactForm/contactForm.svelte';

	const { data }: PageProps = $props();

	// Placeholder values for message parameters
	const placeholderParams = {
		companyPhoneTel: 'your-phone-tel',
		companyPhone: 'Your Phone',
		companyEmail: 'your-email@example.com'
	};
</script>

<svelte:head>
	<title>{m.stout_clean_pig_embrace()}</title>
	<meta
		name="description"
		content={m.extra_pink_niklas_forgive()}
	/>
	<meta
		name="keywords"
		content={m.trick_sour_deer_rise()}
	/>
	<meta
		property="og:title"
		content={m.actual_glad_swan_quiz()}
	/>
	<meta
		property="og:description"
		content={m.loose_antsy_orangutan_dash()}
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content={m.plane_tired_gazelle_climb()}
	/>
	<meta
		name="twitter:description"
		content={m.sharp_sound_pony_fry()}
	/>
</svelte:head>

<div
	class="text-foreground mx-auto max-w-4xl px-6 text-base font-extralight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-8"
>
	{@html m.grassy_seemly_hound_gasp(placeholderParams)}
</div>

<div class="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 max-w-4xl mx-auto">
	
</div>

<div class="mt-8">
	<ContactForm data={{ form: data.contactForm }} />
</div>

<!-- {m.grassy_seemly_hound_gasp()} -->
