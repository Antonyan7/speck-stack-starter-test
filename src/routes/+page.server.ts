import { fail, superValidate, message } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { contactSchema } from './contactForm/contactSchema';

// Cloudflare details provided by user
const cloudflareAccountHash = 'coO5-ODUTOt3Xy0qRkHGhQ';
const cloudflareVariant = 'public'; // Using 'public' as a default variant

// Stock photo image IDs provided by user
const stockPhotoIds = [
	'548d1e06-7055-45d0-dc6b-51c74944b000',
	'5b07b09d-2569-4a9d-d83c-7c563b15d100',
	'365b8076-2daa-4814-355d-bdaad387c300',
	'5516aa3a-1d00-4df1-e359-ea6948289a00'
];

// Generate Cloudflare Image URLs
const imageUrls = stockPhotoIds.map(
	(id) => `https://imagedelivery.net/${cloudflareAccountHash}/${id}/${cloudflareVariant}`
);

export const load: PageServerLoad = async (e) => {
	const contactForm = await superValidate(valibot(contactSchema));

	return {
		heroItemCarousel: imageUrls, // Pass the Cloudflare image URLs
		contactForm
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, valibot(contactSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		return {
			form
		};
	}
};