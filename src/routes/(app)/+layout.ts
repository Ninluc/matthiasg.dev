// export const prerender = true;

export const load = ({ url }) => {
	// Get the url pathname
	const { pathname } = url;

	return {
		pathname: pathname
	};
};
