<script lang="ts">
	import Logo from "$lib/components/Logo.svelte";
	import { page } from "$app/stores";
	import { Menu, X } from "@lucide/svelte";
	import { mobileMenuOpen } from '$lib/stores/ui';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';


	export let locale: string;

	const links = [
		{ label: "Home", href: "/" },
		{ label: "Services", href: "/services" },
		{ label: "Playground", href: "/play" },
		{ label: "Blog", href: "/blog" }
	];

	function applyLock(locked: boolean) {
		if (!browser) return;
		const root = document.documentElement;
		root.classList.toggle('overflow-hidden', locked);
		root.classList.toggle('h-dvh', locked);
		root.classList.toggle('touch-none', locked);
		root.classList.toggle('overscroll-none', locked);
	}

	onMount(() => {
		applyLock(get(mobileMenuOpen));
		const unsubscribe = mobileMenuOpen.subscribe(applyLock);

		onDestroy(() => {
			unsubscribe();
			applyLock(false);
		});
	});

	const allLinks = [...links, { label: "Login", href: "/login" }];
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<div class="mx-[21px] md:mx-[31px] lg:mx-[90px] my-[50px] flex items-center justify-between">
		<a href="/" class="flex items-center gap-2 text-white" class:opacity-0={$mobileMenuOpen}>
			<Logo className="w-[126px] h-[20px] md:w-[180px] md:h-[28px] lg:w-[249px] lg:h-[39px]" />
		</a>

		<div class="hidden md:flex md:pl-11.5 md:pr-11 md:py-3.5 lg:pr-16.5 lg:py-6.5 lg:pl-10 rounded-[55px] bg-[url(/navbar-background.png)] bg-black/25">
			{#each links as link (link.href)}
				<div>
					<a
						href={link.href}
						class="prounded-full px-4 py-2 text-white/90 hover:text-white transition-colors md:text-base lg:text-lg"
					>
            <span class="relative inline-block">
              {link.label}
							{#if $page.url.pathname === link.href}
                <span class="absolute left-0 right-0 bottom-0 h-[1px] bg-white"></span>
              {/if}
            </span>
					</a>
				</div>
			{/each}
		</div>

		<a
			href="/login"
			class="hidden md:flex md:text-base lg:text-lg md:px-6 lg:px-8.5 md:py-3 lg:py-4 rounded-[55px]
             bg-[url(/navbar-background.png)] bg-black/25 border border-[#279EFF] text-[#279EFF] transition"
		>
			Login
		</a>

		<button
			type="button"
			aria-label="Open menu"
			class="md:hidden"
			class:opacity-0={$mobileMenuOpen}
			on:click={() => mobileMenuOpen.set(true)}
		>
			<Menu size={22} />
		</button>
	</div>

	{#if $mobileMenuOpen}
		<div class="fixed inset-0 bg-black/25 md:hidden" on:click={() => mobileMenuOpen.set(false)}></div>

		<aside
			class="fixed right-0 top-0 h-dvh w-full md:hidden
             bg-black/30
             pt-10 pb-10 px-6 flex flex-col transform transition-transform duration-300 translate-x-0"
			style="box-shadow: -24px 0 60px rgba(0,0,0,.35);"
		>
			<div class="flex items-center justify-between">
				<a href="/" class="text-white" on:click={() => mobileMenuOpen.set(false)}>
					<Logo className="w-[126px] h-[20px]" />
				</a>
				<button aria-label="Close menu" class="p-2 -mr-2 text-white/70 hover:text-white" on:click={() => mobileMenuOpen.set(false)}>
					<X size={22} />
				</button>
			</div>

			<nav class="mt-10 ml-auto text-right">
				<ul class="space-y-6">
					{#each allLinks as link}
						<li>
							<a
								href={link.href}
								class={`block text-[44px] leading-none tracking-tight
                        ${$page.url.pathname === link.href ? 'text-[#279EFF]' : 'text-white/90 hover:text-white'}`}
								on:click={() => mobileMenuOpen.set(false)}
							>
								{$page.url.pathname === link.href ? `${link.label} →` : link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</aside>
	{/if}
</header>
