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
		const form = await superValidate(event, formSchema);

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
