<script lang="ts">
	import type { Component } from 'svelte';
	import { ChevronRight } from "@lucide/svelte";

	type IconProps = {
		size?: number;
		color?: string;
		strokeWidth?: number;
		className?: string;
	};

	export let icon: Component<IconProps> | null = null;

	export let title: string;
	export let description: string;
	export let href: string = "#";

	export let accent = "#279EFF";
	export let className: string = "";
	export let bgColor: string = "transparent";
	export let borderColor: string = "#279EFF";
</script>

<a
	href={href}
	class={`group relative block border
          hover:border-opacity-55
          shadow-[0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]
          backdrop-blur-md transition-colors ${className}
          rounded-[10px] md:rounded-[15.61px] lg:rounded-[25px]
          border-[1px] md:border-[0.62px] lg:border-[2px]`}
	style={`--accent:${accent}; background-color: ${bgColor}; border-color: ${borderColor}`}
>
	<span
		class="pointer-events-none absolute -inset-px opacity-0
           group-hover:opacity-100 transition-opacity
           rounded-[10px] md:rounded-[15.61px] lg:rounded-[25px]"
		style="box-shadow: 0 0 0 1px color-mix(in oklab, var(--accent) 55%, transparent),
                       0 12px 40px color-mix(in oklab, var(--accent) 20%, transparent);"
	/>

		<div class="relative p-5 md:p-6 lg:p-7 lg:flex lg:flex-col lg:h-full">
		<div class="flex flex-col items-start gap-3">
			{#if icon}
				<svelte:component this={icon} />
			{/if}

			<h3 class="text-white/95 font-light tracking-tight mt-[46px] md:mt-[62px] lg:mt-[152px] text-[23px] md:text-[30px] lg:text-[40px]">
				{title}
			</h3>
		</div>

		<div class="mt-[11px] md:mt-[20px] lg:mt-[31px] h-[1.3px] md:h-[0.81px] lg:h-[1.3px] bg-gray-400"></div>

		<p class="mt-[29px] md:mt-[27px] lg:mt-[21px] text-[18px] md:text-[21px] lg:text-[26px] leading-relaxed text-white/70 font-extralight">
			{description}
		</p>

		<span
			class="mt-4 lg:mt-auto inline-block text-[18px] md:text-[21px] lg:text-[30px] font-normal text-[#279EFF] underline"
		>
                      Learn more
                    </span>
	</div>
</a>
