<script lang="ts">
	import { MoveRight } from "@lucide/svelte";
	
	export let name: string;
	export let role: string;
	export let description: string;
	export let linkedinUrl: string = "#";
	export let imageSrc: string = "";
	export let imageAlt: string = "";
	export let className: string = "";
</script>

<div class="rounded-[10.3px] md:rounded-[18.28px] lg:rounded-[25px] pl-4 py-1 pr-[6px] md:pl-8 md:py-3 md:pr-[10px] lg:pl-12 lg:py-3 lg:pr-[13.28px] bg-[#171717] backdrop-blur-md {className}">
	<div class="flex flex-row gap-4 lg:gap-6 h-full">
		<div class="flex-1 lg:max-w-[542px] flex flex-col justify-between h-full">
			<h3 class="text-[#279EFF] text-[23px] md:text-[30px] lg:text-[40px] font-normal md:font-medium mt-[18px] md:mt-[30px] lg:mt-[44px] mb-[8px] md:mb-[18px] lg:mb-[26px]">
				{name}
			</h3>
			<div class="h-[0.41px] md:h-[0.73px] lg:h-[1px] bg-[#ECF0F3] mb-[8px] md:mb-[13.35px] lg:mb-[18px]"></div>
			<p class="text-[#ECF0F3] text-[16px] md:text-[24px] lg:text-[25px] font-extralight mb-4">
				{role}
			</p>
			<p class="text-[#ECF0F3] text-[16px] md:text-[24px] lg:text-[24px] font-extralight leading-relaxed mb-6 mt-[46px] md:mt-[226px] lg:mt-[239px]">
				{description}
			</p>
			<a 
				href={linkedinUrl} 
				class="inline-flex items-center gap-2 text-[#279EFF] text-[17px] md:text-[24px] lg:text-[24px] font-normal underline hover:no-underline transition-all mb-[24px] md:mb-[33px] lg:mb-[40px]"
			>
				LinkedIn
				<MoveRight size={20} />
			</a>
		</div>

		<div class="lg:w-1/2 lg:h-full lg:max-w-[50%] md:max-w-[35%] md:w-full md:h-auto w-1/2 h-auto rounded-[6.18px] md:rounded-[10.97px] lg:rounded-[15px] overflow-hidden bg-gray-800 flex-shrink-0">
				<img src={imageSrc} alt={imageAlt} class="w-full h-full object-cover" />
		</div>
	</div>
</div>
