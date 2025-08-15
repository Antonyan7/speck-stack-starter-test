import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			 project: './project.inlang', 
			outdir: './src/lib/paraglide',
			 disableAsyncLocalStorage: true, 
			 
			 urlPatterns: [
				{
					pattern: "/impressum",
					localized: [
						['en', "/impressum"],
						['de', "/impressum"]
					]
				},
				{
					pattern: "/privacy-policy",
					localized: [
						['en', "/privacy-policy"],
						['de', "/datenschutz"]
					]
				},
			 ]
			}),
		tailwindcss(), sveltekit()],
	
});
