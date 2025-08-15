<script lang="ts">
	import * as Carousel from '$lib/shadcn/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	type Props = {
		items: string[];
	};

	const { items }: Props = $props();
</script>

<Carousel.Root
	class="w-full max-w-[1200px]"
	plugins={[
		Autoplay({
			delay: 4000
		})
	]}
>
	<Carousel.Content>
		{#each items as imageSrc, i}
			<Carousel.Item class="flex items-center justify-center">
				<img
					src={imageSrc}
					alt={`Carousel image ${i + 1}`}
					class="aspect-video h-auto w-full max-w-full rounded-lg object-cover"
					loading={i === 0 ? 'eager' : 'lazy'}
				/>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<div class="hidden xl:block">
		<Carousel.Previous />
		<Carousel.Next />
	</div>
</Carousel.Root>
