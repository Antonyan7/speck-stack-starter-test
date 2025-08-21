<script>
	import TeamCard from '$lib/components/TeamCard.svelte';
</script>

<section id="who-are-we" aria-labelledby="who-are-we-title" class="relative mx-[18px] md:mx-8 lg:mx-20 mt-[110px] md:mt-[196px] lg:mt-[200px]">
	<header class="mb-6 lg:flex lg:justify-between lg:items-start">
		<p class="text-[23px] md:text-[28px] lg:text-[40px] text-[#279EFF] cursor-pointer font-medium">Who are we</p>
		<h2 id="who-are-we-title" class="sr-only">Who Are We</h2>

		<div class="lg:w-[60%]">
			<p class="text-balance text-white/90 text-[31px] md:text-[50px] lg:text-[50px] lg:mt-0 md:mt-6 font-light">
				Our leadership team is built on years of hands-on experience — shipping real products, solving real problems, and leading with clarity.
			</p>
		</div>
	</header>

	<!-- Team Cards -->
	<div class="space-y-[21px] md:space-y-[25px] lg:space-y-0 lg:flex lg:flex-col lg:gap-[42px] xl:flex-row xl:justify-between mt-[110px] md:mt-[159px] lg:mt-[285px]">
		<TeamCard
			name="Nik"
			role="Lead Developer"
			description="Leads backend and frontend builds—from MVPs to scalable platforms."
			linkedinUrl="https://linkedin.com/in/nik"
			className="lg:w-full xl:w-[calc(50%-21px)]"
			imageSrc='./Nick.png'
			imageAlt="Nick"
		/>

		<TeamCard
			name="Yanic Scheef"
			role="Founder, Managing Director"
			description="Turns product ideas into clean, user-friendly digital interfaces."
			linkedinUrl="https://linkedin.com/in/yanic-scheef"
			className="lg:w-full xl:w-[calc(50%-21px)]"
			imageSrc='./Yanic.png'
			imageAlt="Yanic"
		/>
	</div>
</section>
