import type { WorksApi } from '$lib/types/worksApi';
import { json } from '@sveltejs/kit';

export const prerender = true;

async function getWorks() {
	let works: WorksApi[] = [];

	const paths = import.meta.glob('/src/works/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file == 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<WorksApi, 'slug'>;
			const work = { ...metadata, slug } satisfies WorksApi;
			works.push(work);
		}
	}

	/* if (params.has('randomOrder') && params.get('randomOrder') == 'true') {
		works = works.sort(() => Math.random() - 0.5);
	} else {
		works = works.sort(
			(a: WorksApi, b: WorksApi) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);
	}
	
	if (params.has('limit')) {
		const limit = parseInt(params.get('limit') as string);
		works = works.slice(0, limit);
	} */

	works = works.sort(
		(a: WorksApi, b: WorksApi) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return works;
}

export async function GET(event) {
	event.setHeaders({
		'Cache-Control': 'no-cache'
	});

	const works = await getWorks();
	return json(works);
}
