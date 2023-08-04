import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const work = await import(`../../../../works/${params.slug}.md`);
		return {
			content: work.default,
			...work.metadata
		};
	} catch (err) {
		console.log(err);
		throw error(404, 'Projet non trouvé');
	}
}
