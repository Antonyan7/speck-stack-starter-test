<script>
	import HeroItemCarousel from '$lib/components/HeroItemCarousel.svelte';
	import ServicesSection from '$lib/sections/ServicesSection.svelte';
	import FAQSection from '$lib/sections/FAQSection.svelte';
	import WhoAreWeSection from '$lib/sections/WhoAreWeSection.svelte';
	import StackSection from '$lib/sections/StackSection.svelte';
	import OurExperienceSection from '$lib/sections/OurExperienceSection.svelte';
</script>

	<section class="relative bg-black">
		<HeroItemCarousel />
	</section>

	<section class="relative py-16 bg-black">
		<ServicesSection />
	</section>

	<section class="relative py-16 bg-black">
		<WhoAreWeSection />
	</section>

	<section class="relative py-16 bg-black">
		<StackSection />
	</section>

	<section class="relative py-16 bg-black">
		<OurExperienceSection />
	</section>

	<section class="relative py-16 bg-black">
		<FAQSection />
	</section>
