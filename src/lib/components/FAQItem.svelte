<script lang="ts">
	import { ChevronDown, ChevronRight } from '@lucide/svelte';
	import { createEventDispatcher } from 'svelte';

	export let question: string;
	export let answer: string;
	export let isOpen: boolean = false;

	const dispatch = createEventDispatcher();

	function toggle() {
		dispatch('toggle');
	}
</script>

<div class="border-b border-gray-700 last:border-b-0">
	<button
		class="w-full flex items-center justify-between py-6 text-left text-white hover:text-gray-200 transition-colors"
		on:click={toggle}
		aria-expanded={isOpen}
	>
		<span class="text-[18px] md:text-[28px] lg:text-[30px] font-extralight md:font-light lg:font-light text-[#ECF0F3] pr-4">{question}</span>
		{#if isOpen}
			<ChevronDown class="w-5 h-5 text-[#279EFF] flex-shrink-0" />
		{:else}
			<ChevronRight class="w-5 h-5 text-gray-400 flex-shrink-0" />
		{/if}
	</button>
	
	{#if isOpen}
		<div class="pb-6 text-[16px] md:text-[21px] lg:text-[25px] font-extralight text-[#ECF0F3] opacity-80 leading-relaxed">
			{answer}
		</div>
	{/if}
</div>
