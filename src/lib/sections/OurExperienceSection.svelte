<script>
	import ExperienceBox from '$lib/components/ExperienceBox.svelte';
	import SvelteLogo from '$lib/components/logos/SvelteLogo.svelte';
	import Html5NewLogo from '$lib/components/logos/Html5NewLogo.svelte';
	import TailwindLogo from '$lib/components/logos/TailwindLogo.svelte';
	import DockerLogo from '$lib/components/logos/DockerLogo.svelte';
	import SupabaseLogo from '$lib/components/logos/SupabaseLogo.svelte';
	import CssLogo from '$lib/components/logos/CssLogo.svelte';
	import ALogo from '$lib/components/logos/ALogo.svelte';
	import AwsLogo from '$lib/components/logos/AwsLogo.svelte';
	import ReactLogo from '$lib/components/logos/ReactLogo.svelte';
	import ShadcnLogo from '$lib/components/logos/ShadcnLogo.svelte';
	import NextLogo from '$lib/components/logos/NextLogo.svelte';
	import UnknownLogo from '$lib/components/logos/UnknownLogo.svelte';
	import MySqlNewLogo from '$lib/components/logos/MySqlNewLogo.svelte';
	import CppLogo from '$lib/components/logos/CppLogo.svelte';
	import VueLogo from '$lib/components/logos/VueLogo.svelte';
	import JavaLogo from '$lib/components/logos/JavaLogo.svelte';
	import NuxtLogo from '$lib/components/logos/NuxtLogo.svelte';
	import RLogo from '$lib/components/logos/RLogo.svelte';
	import WordPressLogo from '$lib/components/logos/WordPressLogo.svelte';
	import CSharpLogo from '$lib/components/logos/CSharpLogo.svelte';
	import JSLogo from '$lib/components/logos/JSLogo.svelte';
	import CloudflareLogo from '$lib/components/logos/CloudflareLogo.svelte';
	import GOLogo from '$lib/components/logos/GOLogo.svelte';
	import ElephantLogo from '$lib/components/logos/ElephantLogo.svelte';
	import MongoDBLogo from '$lib/components/logos/MongoDBLogo.svelte';
	import MariaDBLogo from '$lib/components/logos/MariaDBLogo.svelte';
	import GoogleWorkspace from '$lib/components/logos/GoogleWorkspace.svelte';
	import GoogleCloudNewLogo from '$lib/components/logos/GoogleCloudNewLogo.svelte';
	import TSLogoLarge from '$lib/components/logos/TSLogoLarge.svelte';
	import ClerkLargeLogo from '$lib/components/logos/ClerkLargeLogo.svelte';

	const logos = [
		{ 
			id: 1, 
			logo: SvelteLogo,
			sizes: {
				sm: { width: 72, height: 18 },
				md: { width: 115, height: 28 },
				lg: { width: 158, height: 39 }
			}
		},
		{ 
			id: 2, 
			logo: Html5NewLogo,
			sizes: {
				sm: { width: 49, height: 48 },
				md: { width: 78, height: 78 },
				lg: { width: 109, height: 108 }
			}
		},
		{ 
			id: 3, 
			logo: TailwindLogo,
			color: '#6C6C6C',
			sizes: {
				sm: { width: 95, height: 11 },
				md: { width: 151, height: 19 },
				lg: { width: 208, height: 25 }
			}
		},
		{ 
			id: 4, 
			logo: DockerLogo,
			sizes: {
				sm: { width: 73, height: 19 },
				md: { width: 117, height: 31 },
				lg: { width: 161, height: 42 }
			}
		},
		{ 
			id: 5, 
			logo: TSLogoLarge,
			color: '#6C6C6C',
			sizes: {
				sm: { width: 43.5, height: 44 },
				md: { width: 69, height: 70 },
				lg: { width: 95, height: 96 }
			}
		},
		{ 
			id: 6, 
			logo: GoogleCloudNewLogo,
			sizes: {
				sm: { width: 89, height: 16 },
				md: { width: 142, height: 25 },
				lg: { width: 195, height: 35 }
			}
		},
		{ 
			id: 7, 
			logo: SupabaseLogo,
			sizes: {
				sm: { width: 96, height: 18 },
				md: { width: 153, height: 29 },
				lg: { width: 211, height: 40 }
			}
		},
		{ 
			id: 8, 
			logo: CssLogo,
			sizes: {
				sm: { width: 36, height: 50 },
				md: { width: 56, height: 78 },
				lg: { width: 78, height: 108 }
			}
		},
		{ 
			id: 9, 
			logo: ALogo,
			sizes: {
				sm: { width: 43, height: 45 },
				md: { width: 68, height: 72 },
				lg: { width: 94, height: 99 }
			}
		},
		{ 
			id: 10, 
			logo: AwsLogo,
			sizes: {
				sm: { width: 52, height: 31 },
				md: { width: 83, height: 49 },
				lg: { width: 114, height: 67 }
			}
		},
		{ 
			id: 11, 
			logo: ReactLogo,
			sizes: {
				sm: { width: 82, height: 25 },
				md: { width: 130, height: 40 },
				lg: { width: 179, height: 56 }
			}
		},
		{ 
			id: 12, 
			logo: ShadcnLogo,
			sizes: {
				sm: { width: 73, height: 34 },
				md: { width: 116, height: 54 },
				lg: { width: 160, height: 74 }
			}
		},
		{ 
			id: 13, 
			logo: NextLogo,
			sizes: {
				sm: { width: 82, height: 16 },
				md: { width: 131, height: 26 },
				lg: { width: 180, height: 36 }
			}
		},
		{ 
			id: 14, 
			logo: UnknownLogo,
			sizes: {
				sm: { width: 35, height: 36 },
				md: { width: 56, height: 56 },
				lg: { width: 77, height: 78 }
			}
		},
		{ 
			id: 15, 
			logo: MySqlNewLogo,
			sizes: {
				sm: { width: 73, height: 50 },
				md: { width: 116, height: 78 },
				lg: { width: 160, height: 109 }
			}
		},
		{ 
			id: 16, 
			logo: CppLogo,
			sizes: {
				sm: { width: 41, height: 45 },
				md: { width: 65, height: 72 },
				lg: { width: 89, height: 100 }
			}
		},
		{ 
			id: 17, 
			logo: VueLogo,
			sizes: {
				sm: { width: 40, height: 34 },
				md: { width: 63, height: 54 },
				lg: { width: 87, height: 75 }
			}
		},
		{ 
			id: 18, 
			logo: JavaLogo,
			sizes: {
				sm: { width: 65, height: 65 },
				md: { width: 103, height: 103 },
				lg: { width: 143, height: 143 }
			}
		},
		{ 
			id: 19, 
			logo: NuxtLogo,
			sizes: {
				sm: { width: 81, height: 24 },
				md: { width: 129, height: 38 },
				lg: { width: 179, height: 53 }
			}
		},
		{ 
			id: 20, 
			logo: RLogo,
			sizes: {
				sm: { width: 40, height: 40 },
				md: { width: 63, height: 63 },
				lg: { width: 87, height: 87 }
			}
		},
		{ 
			id: 21, 
			logo: ClerkLargeLogo,
			color: '#6C6C6C',
			sizes: {
				sm: { width: 78, height: 24 },
				md: { width: 124, height: 39 },
				lg: { width: 170, height: 53 }
			}
		},
		{
			id: 22,
			logo: CSharpLogo,
			sizes: {
				sm: { width: 39, height: 43 },
				md: { width: 63, height: 69 },
				lg: { width: 86, height: 94 }
			}
		},
		{
			id: 23,
			logo: JSLogo,
			sizes: {
				sm: { width: 45, height: 49 },
				md: { width: 72, height: 78 },
				lg: { width: 99, height: 108 }
			}
		},
		{ 
			id: 24,
			logo: WordPressLogo,
			sizes: {
				sm: { width: 84, height: 19 },
				md: { width: 133, height: 30 },
				lg: { width: 184, height: 42 }
			}
		},
		{ 
			id: 25, 
			logo: CloudflareLogo,
			sizes: {
				sm: { width: 97, height: 14 },
				md: { width: 155, height: 22 },
				lg: { width: 213, height: 30 }
			}
		},
		{ 
			id: 26, 
			logo: GOLogo,
			sizes: {
				sm: { width: 62, height: 24 },
				md: { width: 98, height: 38 },
				lg: { width: 136, height: 52 }
			}
		},
		{ 
			id: 27, 
			logo: ElephantLogo,
			sizes: {
				sm: { width: 37, height: 39 },
				md: { width: 59, height: 61 },
				lg: { width: 81, height: 84 }
			}
		},
		{ 
			id: 28, 
			logo: MongoDBLogo,
			sizes: {
				sm: { width: 87, height: 22 },
				md: { width: 138, height: 35 },
				lg: { width: 191, height: 48 }
			}
		},
		{ 
			id: 29, 
			logo: MariaDBLogo,
			sizes: {
				sm: { width: 95, height: 23 },
				md: { width: 150, height: 37 },
				lg: { width: 208, height: 51 }
			}
		},
		{ 
			id: 30, 
			logo: GoogleWorkspace,
			sizes: {
				sm: { width: 98, height: 13 },
				md: { width: 156, height: 21 },
				lg: { width: 216, height: 29 }
			}
		}
	];
</script>

<section id="our-experience" aria-labelledby="our-experience-title" class="relative mx-[18px] md:mx-8 lg:mx-20 mt-[110px] md:mt-[196px] lg:mt-[200px] z-5">
	<header class="mb-6">
		<p class="text-[23px] md:text-[28px] lg:text-[40px] text-[#279EFF] cursor-pointer font-medium">Our Experience</p>
		<h2 id="our-experience-title" class="sr-only">Our Experience</h2>

		<div class="hidden md:block border-t border-white mt-[36px] md:mt-[36px] lg:mt-[42px]"></div>

		<div class="lg:w-[60%] mt-[56px] md:mt-[68px] lg:mt-[70px]">
			<p class="text-balance text-white/90 text-[31px] md:text-[50px] lg:text-[50px] font-light">
				Our work goes beyond code—we build products that launch, grow, and stay reliable under real-world conditions.
			</p>
		</div>
	</header>

	<div class="flex items-center justify-center">
		<div class="mt-[82px] md:mt-[97px] lg:mt-[112px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
			{#each logos as { logo: LogoComponent, sizes, color }}
				<ExperienceBox>
					<div class="flex items-center justify-center w-full h-full">
						<div
							class="flex items-center justify-center"
							style="width: {sizes.sm.width}px; height: {sizes.sm.height}px; --md-width: {sizes.md.width}px; --md-height: {sizes.md.height}px; --lg-width: {sizes.lg.width}px; --lg-height: {sizes.lg.height}px;"
						>
							<LogoComponent color={color} />
						</div>
					</div>
				</ExperienceBox>
			{/each}
		</div>
	</div>

	<style>
		@media (min-width: 768px) {
			div[style*="--md-width"] {
				width: var(--md-width) !important;
				height: var(--md-height) !important;
				min-width: var(--md-width) !important;
				min-height: var(--md-height) !important;
			}
		}

		@media (min-width: 1024px) {
			div[style*="--lg-width"] {
				width: var(--lg-width) !important;
				height: var(--lg-height) !important;
				min-width: var(--lg-width) !important;
				min-height: var(--lg-height) !important;
			}
		}
	</style>
</section>
