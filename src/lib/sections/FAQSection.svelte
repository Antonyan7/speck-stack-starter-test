<script lang="ts">
	import FAQItem from '$lib/components/FAQItem.svelte';
	
	let openItem = 0;
	
	const faqItems = [
		{
			question: "I need a software for my business that doesn’t exist, can you help?",
			answer: "This kind of request is the reason this company exists and the cornerstones it is built on. We specialize in building custom tailored software built for our clients particular needs. We take a deep dive to understand your vision, optimize, design, build and support you every step of the process."
		},
		{
			question: "Can you help with more then building the software?",
			answer: "Text"
		},
		{
			question: "How can I get started?",
			answer: "Text"
		}
	];
	
	function handleToggle(event: { detail: number }) {
		const index = event.detail;
		openItem = openItem === index ? -1 : index;
	}
</script>

<section id="faq" aria-labelledby="faq-title" class="relative mx-[18px] md:mx-8 lg:mx-20 z-20">
	<img src="/grid-bottom-left.png"
		 alt="Grid bottom left pattern background"
		 class="absolute top-[-60px] left-[-30px] md:left-[-30px] md:top-[-70px] lg:top-[-200px] lg:left-[-80px] sm: w-auto h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px] pointer-events-none"
	/>
	<img 	src="/grid-right.png"
			alt="Grid Right pattern background"
			class="absolute top-[100px] right-[-30px] z-1 md:right-[-30px] md:top-[100px] lg:right-[-80px] lg:top-[600px] sm: w-auto h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px] pointer-events-none"
	/>
	<header class="mb-6 lg:flex lg:justify-between lg:items-start">
		<p class="text-[23px] md:text-[28px] lg:text-[40px] text-[#279EFF] cursor-pointer font-medium">Frequently Asked Questions</p>
		<h2 id="faq-title" class="sr-only">Frequently Asked Questions</h2>
		
		<div class="lg:w-[60%]">
			<p class="text-balance text-white/90 text-[31px] md:text-[50px] lg:text-[50px] lg:mt-0 md:mt-6 font-light">
				Got questions? We've answered some of the most common ones below.
			</p>
			<div class="mt-12">
				<div class="max-w-4xl">
					{#each faqItems as item, index}
						<FAQItem
							question={item.question}
							answer={item.answer}
							isOpen={openItem === index}
							on:toggle={() => handleToggle({ detail: index })}
						/>
					{/each}
				</div>
			</div>
		</div>
	</header>

</section>
