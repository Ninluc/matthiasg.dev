import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		seo: {
			title: 'Soutiens à Hugo',
			description: 'Soutiens à Hugo qui va se faire expulser de sa maison. Il a besoin de vous !',
			type: 'article'
		}
	};
}) satisfies PageLoad;
