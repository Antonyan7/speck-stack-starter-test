<script>
	import LogosContainer from '$lib/components/LogosContainer.svelte';
</script>

<section id="stack" aria-labelledby="stack-title" class="relative mx-[18px] md:mx-8 lg:mx-20 mt-[110px] md:mt-[196px] lg:mt-[200px]">
	<header class="mb-6 lg:flex lg:justify-between lg:items-start">
		<p class="text-[23px] md:text-[28px] lg:text-[40px] text-[#279EFF] cursor-pointer font-medium">Our Stack</p>
		<h2 id="stack-title" class="sr-only">Our Stack</h2>

		<div class="lg:w-[60%]">
			<p class="text-balance text-white/90 text-[31px] md:text-[50px] lg:text-[50px] lg:mt-0 md:mt-6 font-light">
				We work with tools we trust—no bloated tech stacks, no unnecessary complexity, only what gets results faster.
			</p>
		</div>
	</header>

	<div class="mt-[110px] md:mt-[159px] lg:mt-[285px]">
		<LogosContainer />
	</div>
</section>
