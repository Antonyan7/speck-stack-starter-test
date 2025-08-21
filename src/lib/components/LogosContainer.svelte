<script lang="ts">
	import TailwindLogo from './logos/TailwindLogo.svelte';
	import Html5Logo from './logos/Html5Logo.svelte';
	import ClerkLogo from './logos/ClerkLogo.svelte';
	import MySqlLogo from './logos/MySqlLogo.svelte';
	import TypeScriptLogo from './logos/TypeScriptLogo.svelte';
	import GoogleCloudLogo from './logos/GoogleCloudLogo.svelte';
</script>

<div class="w-full overflow-x-auto">
	<div class="flex gap-4 px-[18px] md:px-8 lg:px-20">
		<div class="flex-shrink-0 h-[62.48px] md:h-[101px] lg:h-[178px] px-[18px] md:px-[40px] lg:px-[60px] rounded-[7.28px] md:rounded-[10.27px] lg:rounded-[15px] bg-[#171717] flex items-center justify-center">
			<TailwindLogo className="w-[120px] h-[14px] md:w-[151px] md:h-[19px] lg:w-[208px] lg:h-[25px]" />
		</div>

		<div class="flex-shrink-0 h-[62.48px] md:h-[101px] lg:h-[178px] px-[18px] md:px-[40px] lg:px-[60px] rounded-[7.28px] md:rounded-[10.27px] lg:rounded-[15px] bg-[#171717] flex items-center justify-center">
			<Html5Logo className="w-[40px] h-[40px] md:w-[78px] md:h-[78px] lg:w-[109px] lg:h-[108px]" />
		</div>

		<div class="flex-shrink-0 h-[62.48px] md:h-[101px] lg:h-[178px] px-[18px] md:px-[40px] lg:px-[60px] rounded-[7.28px] md:rounded-[10.27px] lg:rounded-[15px] bg-[#171717] flex items-center justify-center">
			<ClerkLogo className="w-[88px] h-[28px] md:w-[124px] md:h-[39px] lg:w-[170px] lg:h-[53px]" />
		</div>

		<div class="flex-shrink-0 h-[62.48px] md:h-[101px] lg:h-[178px] px-[18px] md:px-[40px] lg:px-[60px] rounded-[7.28px] md:rounded-[10.27px] lg:rounded-[15px] bg-[#171717] flex items-center justify-center">
			<MySqlLogo className="w-[60px] h-[42px] md:w-[116px] md:h-[78px] lg:w-[160px] lg:h-[109px]" />
		</div>

		<div class="flex-shrink-0 h-[62.48px] md:h-[101px] lg:h-[178px] px-[18px] md:px-[40px] lg:px-[60px] rounded-[7.28px] md:rounded-[10.27px] lg:rounded-[15px] bg-[#171717] flex items-center justify-center">
			<TypeScriptLogo className="w-[31px] h-[30px] md:w-[69px] md:h-[70px] lg:w-[95px] lg:h-[96px]" />
		</div>

		<div class="flex-shrink-0 h-[62.48px] md:h-[101px] lg:h-[178px] px-[18px] md:px-[40px] lg:px-[60px] rounded-[7.28px] md:rounded-[10.27px] lg:rounded-[15px] bg-[#171717] flex items-center justify-center">
			<GoogleCloudLogo className="w-[100px] h-[18px] md:w-[142px] md:h-[25px] lg:w-[195px] lg:h-[35px]" />
		</div>
	</div>
</div>

<style>
    /* Hide scrollbar for all browsers */
    .w-full.overflow-x-auto {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }
    
    .w-full.overflow-x-auto::-webkit-scrollbar {
        display: none;  /* Safari and Chrome */
    }

    @media (min-width: 768px) {
        div[style*="--md-width"] {
            width: var(--md-width) !important;
            height: var(--md-height) !important;
        }
    }

    @media (min-width: 1024px) {
        div[style*="--lg-width"] {
            width: var(--lg-width) !important;
            height: var(--lg-height) !important;
        }
    }
</style>