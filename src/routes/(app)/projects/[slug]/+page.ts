import { getWorkPreviewImage } from '$lib/scripts/layout/getWorkPreviewImg';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const work = await import(`../../../../works/${params.slug}.md`);

		return {
			content: work.default,
			slug: params.slug,
			...work.metadata,
			seo: {
				title: work.metadata.title,
				description: 'Projet de Matthias Guillitte : ' + work.metadata.description,
				image: getWorkPreviewImage(params.slug)[2]?.src,
				type: 'article',
				twitterCardType: 'summary_large_image'
			}
		};
	} catch (err) {
		console.log(err);
		throw error(404, 'Projet non trouvé');
	}
}
