/* eslint-disable no-useless-escape */
export const PAGE_ORDER: { [path: string]: number } = {
	'/': 0,
	'/projects': 1,
	'/projects/[^/]*': 2
};
