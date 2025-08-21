<script>
	import ContactCta from '$lib/components/ContactCta.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import PartnersIcons from '$lib/components/PartnersIcons.svelte';
	import GlobeIcon from '$lib/components/icons/GlobeIcon.svelte';
	import BracesIcon from '$lib/components/icons/BracesIcon.svelte';
</script>

<div id="services" aria-labelledby="services-title" class="relative mx-[18px] md:mx-8 lg:mx-20">
	<img 	src="/grid.png"
			alt="Grid pattern background"
			class="absolute top-[-60px] left-[-30px] md:left-[-30px] md:top-[-200px] lg:top-[-400px] lg:left-[-80px] sm: w-auto h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px] pointer-events-none"
	/>
	<img 	src="/grid-right.png"
			alt="Grid Right pattern background"
			class="absolute top-[100px] right-[-30px] md:right-[-30px] md:top-[-50px] lg:top-[-200px] lg:right-[-80px] sm: w-auto h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px] pointer-events-none"
	/>

	<header class="mb-6 lg:flex lg:justify-between lg:items-start relative z-10">
		<p class="text-[23px] md:text-[28px] lg:text-[40px] text-[#279EFF] cursor-pointer font-medium">Services</p>
		<h2 id="services-title" class="sr-only">Our Services</h2>
		
		<div class="lg:w-[60%]">
			<p class="text-balance text-white/90 text-[31px] md:text-[50px] lg:text-[50px] lg:mt-0 md:mt-6 font-light">
				We don't just build—we craft digital spaces that connect, perform, and grow with you, evolving alongside your business and the people who use it.
			</p>

			<div class="mt-[94px] md:mt-[65px] lg:mt-[84px] flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-4 sm:gap-0">
				<ContactCta mode="secondary" />
				<PartnersIcons className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[78px] lg:h-[78px]" rightOneClass="md:right-[103px] lg:right-[110px]" rightTwoClass="md:right-[59px] lg:right-[55px]" />
			</div>
		</div>
	</header>


	<div class="space-y-6 lg:space-y-0 lg:flex lg:justify-between lg:gap-10 mt-[110px] md:mt-[159px] lg:mt-[285px] relative z-10">
		<ServiceCard
			title="Custom Website Development"
			description="We design and build custom websites from the ground up — fully tailored to your brand, goals, and users. Clean code, responsive design, and future-ready features, all built to scale."
			href="/services/web"
			icon={GlobeIcon}
						className="border-[1px] lg:w-[calc(50%-20px)]"
			bgColor="#171717"
			borderColor="#279EFF"
			/>

		<ServiceCard
			title="Custom Software Development"
			description="Secure, scalable apps tailored to your workflows and goals. Built with modern tech stacks to solve real-world problems."
			href="/services/software"
			icon={BracesIcon}
			className="border-[1px] lg:w-[calc(50%-20px)]"
			bgColor="transparent"
			borderColor="#525252"
		/>
	</div>
</div>
