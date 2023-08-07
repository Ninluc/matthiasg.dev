// export const prerender = true;

export const load = async (event) => {
	// Get the url pathname
	const { pathname } = event.url;

	return {
		pathname: pathname
	};
};
