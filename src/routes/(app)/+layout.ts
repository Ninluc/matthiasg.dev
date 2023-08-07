// export const prerender = true;

export const load = async (event) => {
	// Get the url pathname
	const { pathname } = event.url;

	// Get the loading text
	const loadingTextResponse = await event.fetch('/assets/boot.txt');
	const loadingText = await loadingTextResponse.text();
	const loadingTextLines = loadingText.split(/\r?\n/);

	return {
		pathname: pathname,
		loadingText: loadingTextLines
	};
};
