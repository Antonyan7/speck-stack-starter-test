<script>
import ContactCta from '$lib/components/ContactCta.svelte';
import { mobileMenuOpen } from '$lib/stores/ui.js';
</script>

<div class="w-full max-h-[1200px] flex items-center justify-center text-center text-white relative overflow-hidden">
	<div class="absolute inset-0 bg-black rounded-b-[25px] md:rounded-b-[36.71px] lg:rounded-b-[50px]"></div>
	<video
		autoplay
		loop
		muted
		playsinline
		class="absolute inset-0 w-full h-full object-cover rounded-b-[25px] md:rounded-b-[36.71px] lg:rounded-b-[50px] z-10"
	>
		<source src="/Chetra - Hero Video (Adjusted)-1.mp4" type="video/mp4" />
	</video>
	<div class="absolute inset-0 bg-[#06121a]/70 rounded-b-[25px] md:rounded-b-[36.71px] lg:rounded-b-[50px]"></div>

	<div class="mt-[100px] md:mt-[340px] lg:mt-[302px] md:my-[200px] lg:mb-[300px] relative z-10 px-6 flex flex-col justify-center items-center w-full min-h-screen" class:opacity-0={$mobileMenuOpen}>
		<h1 class="text-[38px] md:text-[50px] lg:text-6xl font-light leading-tight">
			Web Development, <br class="hidden sm:block" />
			Done Right.
		</h1>

		<div class="mt-10 flex flex-col justify-center items-center w-full">
			<ContactCta />
		</div>
		<div class="flex justify-center mt-40 opacity-80">
			<svg class="mx-auto animate-bounce" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
	</div>
</div>
