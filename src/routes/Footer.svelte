<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { Locale } from '$lib/paraglide/runtime';
	import { localizeHref } from '$lib/paraglide/runtime';

	type Props = {
		currentLocale: Locale;
	};

	const { currentLocale }: Props = $props();
</script>

<footer class="mt-8 flex w-full justify-center px-4 py-2 pb-6 xl:mt-12">
	<div class="flex max-w-lg justify-around gap-6 lg:gap-8">
		<a
			href={localizeHref('/impressum', {
				locale: currentLocale
			})}>{m.cute_sleek_cuckoo_slurp()}</a
		>
		<a
			href={localizeHref('/privacy-policy', {
				locale: currentLocale
			})}>{m.grand_whole_shrike_blend()}</a
		>
	</div>
</footer>
