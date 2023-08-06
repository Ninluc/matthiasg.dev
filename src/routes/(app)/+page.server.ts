import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail } from '@sveltejs/kit';
import { sendDiscordWebhook } from '$lib/scripts/misc/sendDiscordWebHook.js';
import { DISCORD_WEBHOOK } from '$env/static/private';

const formSchema = z.object({
	mail: z.string().email(),
	message: z.string().max(2000 - 37)
});

export const load = async (event) => {
	const form = await superValidate(event, formSchema);
	return { form };
};

export const actions = {
	default: async (event) => {
		// Verify recaptcha
		const form = await superValidate(event, formSchema);

		// const formData = await event.request.formData();

		// // console.table([...formData.entries()]);
		// console.log(formData.get('g-recaptcha-response'));

		// if (
		// 	!(await verifyCaptcha(
		// 		formData.get('g-recaptcha-response') as string,
		// 		event.getClientAddress()
		// 	))
		// ) {
		// 	return fail(500, { form });
		// }

		if (!form.valid) {
			return fail(400, { form });
		}

		// Send discord message
		// - Construct message
		const message = '```\nIp address : ' + event.getClientAddress() + '\n```\n' + form.data.message;
		if (!(await sendDiscordWebhook(form.data.mail, message, DISCORD_WEBHOOK))) {
			throw error(500);
		}

		return { form };
	}
};

// async function verifyCaptcha(token: string, ip: string) {
// 	// Verify the recaptcha
// 	// https://developers.google.com/recaptcha/docs/verify
// 	const recaptchaVerifyResponse = await fetch(
// 		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}&remoteip=${ip}`,
// 		{
// 			method: 'POST'
// 		}
// 	);

// 	const json: {
// 		success: boolean;
// 	} = await recaptchaVerifyResponse.json();

// 	return json.success;
// }
