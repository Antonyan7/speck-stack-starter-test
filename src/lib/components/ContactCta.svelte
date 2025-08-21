<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	const cfgDesktop = { KNOB: 60, M_LEFT: 7,    M_TOP: 7,    M_BOTTOM: 8.81, LABEL_ML: 22.81 };
	const cfgTablet  = { KNOB: 46, M_LEFT: 5.38, M_TOP: 5.38, M_BOTTOM: 6.77, LABEL_ML: 17.54 };
	const cfgMobile  = { KNOB: 44, M_LEFT: 5.13, M_TOP: 5.13, M_BOTTOM: 6.46, LABEL_ML: 16.72 };

	const LABEL_MR = 33;
	const THRESHOLD = 0.9;

	export let href = "/contacts";
	export let label = "Get in Contact";
	export let className = "";
	export let mode: "primary" | "secondary" = "primary";

	let trackEl: HTMLDivElement | null = null;
	let trackW = 0;
	let progress = 0;
	let dragging = false;

	type BP = "mobile" | "md" | "lg";
	let bp: BP = "mobile";

	$: cfg = bp === "lg" ? cfgDesktop : bp === "md" ? cfgTablet : cfgMobile;

	$: trackH   = Math.round(cfg.KNOB + cfg.M_TOP + cfg.M_BOTTOM);
	$: knobLeft = cfg.M_LEFT + progress * (trackW - cfg.M_LEFT - cfg.KNOB);

	onMount(() => {
		const setW = () => (trackW = trackEl?.clientWidth ?? 0);
		setW();
		const ro = new ResizeObserver(setW);
		if (trackEl) ro.observe(trackEl);

		const mqMd = window.matchMedia("(min-width: 768px)");
		const mqLg = window.matchMedia("(min-width: 1024px)");
		const updateBP = () => (bp = mqLg.matches ? "lg" : mqMd.matches ? "md" : "mobile");
		updateBP();
		mqMd.addEventListener("change", updateBP);
		mqLg.addEventListener("change", updateBP);

		return () => {
			ro.disconnect();
			mqMd.removeEventListener("change", updateBP);
			mqLg.removeEventListener("change", updateBP);
		};
	});

	function xToProgress(clientX: number) {
		if (!trackEl) return 0;
		const rect = trackEl.getBoundingClientRect();
		const min = cfg.M_LEFT;
		const max = rect.width - cfg.KNOB;
		const x = Math.max(min, Math.min(max, clientX - rect.left));
		return (x - min) / (rect.width - cfg.M_LEFT - cfg.KNOB);
	}

	function onPointerDown(e: PointerEvent) {
		(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
		dragging = true;
		progress = xToProgress(e.clientX);
	}
	function onPointerMove(e: PointerEvent) {
		if (!dragging) return;
		progress = xToProgress(e.clientX);
	}
	async function onPointerUp() {
		if (!dragging) return;
		dragging = false;
		if (progress >= THRESHOLD) {
			progress = 1;
			await new Promise((r) => setTimeout(r, 150));
			goto(href);
		} else {
			progress = 0;
		}
	}

	async function onKeydown(e: KeyboardEvent) {
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			progress = 1;
			await new Promise((r) => setTimeout(r, 150));
			goto(href);
		}
	}
</script>


<div
	bind:this={trackEl}
	class={`w-full max-w-[320px] relative overflow-hidden select-none touch-none
          rounded-full border border-white/25 backdrop-blur-[8px] ${className}`}
	style:height={`${trackH}px`}
>
	<span class="pointer-events-none absolute inset-0 rounded-full {mode === 'secondary' ? '' : 'opacity-70'}
               {mode === 'secondary' ? 'bg-[#279EFF]' : 'bg-[radial-gradient(120%_100%_at_0%_0%,rgba(70,144,212,0.20)_0%,rgba(110,191,244,0.16)_22.4%,rgba(70,144,212,0.10)_100%)]'}"></span>
	<span class="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15"></span>

	<span
		class="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-white/95 font-light text-[24px] tracking-[-0.01em]"
		style:left={`${cfg.M_LEFT + cfg.KNOB + cfg.LABEL_ML}px`}
		style:right={`${LABEL_MR}px`}
		style:opacity={progress > 0.2 ? 0 : 1}
		style:transition="opacity .15s linear"
	>
		{label}
	</span>

	<div
		role="button"
		aria-label={label}
		tabindex="0"
		class="absolute grid place-items-center rounded-full bg-white
           shadow-[0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.12)]
           cursor-pointer outline-none transition-[left] duration-150 ease-out"
		style:width={`${cfg.KNOB}px`}
		style:height={`${cfg.KNOB}px`}
		style:top={`${cfg.M_TOP}px`}
		style:left={`${knobLeft}px`}
		on:pointerdown={onPointerDown}
		on:pointermove={onPointerMove}
		on:pointerup={onPointerUp}
		on:pointercancel={onPointerUp}
		on:keydown={onKeydown}
	>
		<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
			<path d="M5 12h12M13 5l7 7-7 7"
						stroke="#279EFF" stroke-width="2"
						stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</div>
</div>
