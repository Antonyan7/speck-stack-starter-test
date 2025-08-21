<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import ContactCta from '$lib/components/ContactCta.svelte';
	import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
</script>

<footer class="relative w-full overflow-hidden bg-black min-h-[200px] z-20">
	<div class="absolute inset-0 bg-black rounded-t-[25px] md:rounded-t-[15px] lg:rounded-t-[15px]"></div>
	<video
		autoplay
		loop
		muted
		playsinline
		class="absolute inset-0 w-full h-full object-cover rounded-t-[25px] md:rounded-t-[15px] lg:rounded-t-[15px] z-10"
	>
		<source src="/Chetra - Hero Video (Adjusted)-1.mp4" type="video/mp4" />
	</video>
	<div class="absolute inset-0 bg-[#06121a]/70 rounded-t-[25px] md:rounded-t-[15px] lg:rounded-t-[15px]"></div>

	<div class="relative z-10 w-full flex flex-col justify-between items-center pt-[38px] md:pt-[77px] lg:pt-[160px] pb-[28px] md:pb-[52px] lg:pb-[99px] pl-[32px] md:pl-[35px] lg:pl-[80px] pr-[26px] md:pr-[31px] lg:pr-[80px]">
		<div class="flex w-full items-center justify-between gap-8 md:gap-12 lg:gap-16">
			<Logo className="w-[126px] h-[20px] md:w-[180px] md:h-[28px] lg:w-[249px] lg:h-[39px]" />

			<div class="hidden md:flex gap-[89px] md:gap-[130px] lg:gap-[113px]">
				<div>
					<h3 class="text-[#FFFFFF] text-[17px] md:text-[19px] font-extralight mb-2">Call Us</h3>
					<p class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light">+49 170 7102612</p>
				</div>

				<div>
					<h3 class="text-[#FFFFFF] text-[17px] md:text-[19px] font-extralight mb-2">Email</h3>
					<p class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light">info@scheef.tech</p>
				</div>
			</div>
		</div>

		<div class="flex flex-row w-full justify-between items-center mt-[88px] md:mt-[124px] lg:mt-[163px]">
			<div class="flex flex-row items-center mt-8 w-full justify-start max-w-[350px]">
				<div class="flex flex-col w-full">
					<p class="text-[#F2F2F2] text-[40px] md:text-[58.96px] lg:text-[80px] font-light mb-[22px] md:mb-[30px] lg:mb-[41px]">Let's talk</p>
					<ContactCta label="Book a Call"  />
				</div>
			</div>

			<div class="hidden md:flex gap-[89px] md:gap-[130px] lg:gap-[113px]">
				<div>
					<h3 class="text-[#FFFFFF] text-[17px] md:text-[19px] font-extralight mb-2">Address</h3>
					<p class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light opacity-60">Agiou Georgiou 52</p>
					<p class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light opacity-60">7737 Maroni</p>
					<p class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light opacity-60">Cyprus</p>
				</div>

				<div class="flex flex-col">
					<h3 class="text-[#FFFFFF] text-[17px] md:text-[19px] font-extralight mb-2">Legal</h3>
					<a href="/privacy-policy" class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light opacity-60 cursor-pointer hover:opacity-100 transition-opacity">Privacy Policy</a>
					<a href="/terms-of-service" class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light opacity-60 cursor-pointer hover:opacity-100 transition-opacity">Terms of Service</a>
				</div>
			</div>
		</div>

		<div class="flex md:hidden gap-[89px] md:gap-[130px] lg:gap-[113px] mt-[214px]">
			<div>
				<h3 class="text-[#FFFFFF] text-[17px] md:text-[19px] font-extralight mb-2">Call Us</h3>
				<p class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light">+49 170 7102612</p>
			</div>

			<div>
				<h3 class="text-[#FFFFFF] text-[17px] md:text-[19px] font-extralight mb-2">Email</h3>
				<p class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light">info@scheef.tech</p>
			</div>
		</div>

		<div class="flex md:hidden gap-[89px] md:gap-[130px] lg:gap-[113px] mt-[64px]">
			<div>
				<h3 class="text-[#FFFFFF] text-[17px] md:text-[19px] font-extralight mb-2">Address</h3>
				<p class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light opacity-60">Agiou Georgiou 52</p>
				<p class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light opacity-60">7737 Maroni</p>
				<p class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light opacity-60">Cyprus</p>
			</div>

			<div class="flex flex-col">
				<h3 class="text-[#FFFFFF] text-[17px] md:text-[19px] font-extralight mb-2">Legal</h3>
				<a href="/privacy-policy" class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light opacity-60 cursor-pointer hover:opacity-100 transition-opacity">Privacy Policy</a>
				<a href="/terms-of-service" class="text-[#FFFFFF] text-[17px] md:text-[19px] lg:text-[25px] font-light opacity-60 cursor-pointer hover:opacity-100 transition-opacity">Terms of Service</a>
			</div>
		</div>

		<div class="w-full border-t border-[#F2F2F28C] mt-[99px] md:mt-[185px] lg:mt-[162px] opacity-40"></div>

		<div class="flex justify-between items-center mt-[14px] w-full">
			<p class="text-[#FFFFFF] text-[14px] md:text-[16.21px] lg:text-[22px] font-extralight opacity-60">
				© 2025 scheef.tech. All Rights Reserved.
			</p>
			<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="cursor-pointer hover:opacity-80 transition-opacity">
				<LinkedInIcon />
			</a>
		</div>

	</div>
</footer>
