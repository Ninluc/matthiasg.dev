export async function sendDiscordWebhook(
	username = 'matthiasg.dev',
	message: string,
	webHook: string
): Promise<boolean> {
	const headersList = {
		'Content-Type': 'application/json'
	};

	const bodyContent = JSON.stringify({ username: username, content: message });

	const response = await fetch('https://discord.com/api/webhooks/' + webHook, {
		method: 'POST',
		body: bodyContent,
		headers: headersList
	});

	if (!response.ok) {
		console.error('Error when using discord webhook : ' + (await response.text()));
		return false;
	}
	return true;
}
