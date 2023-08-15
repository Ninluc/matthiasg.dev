import type { WorksApi } from '$lib/types/worksApi';
import { parse } from 'date-fns';

export async function load({ fetch, url }) {
	const worksResponse = await fetch('/api/works');
	if (!worksResponse.ok) throw new Error(`Failed to load works: ${worksResponse.statusText}`);
	let works: WorksApi[] = await worksResponse.json();

	// Only takes the works in the current category
	const category = url.searchParams.get('category');
	if (category && category != 'tous') {
		works = works.filter((work) => work.category == category);
	}

	works = works.sort((a, b) => {
		const dateA = parse(a.date, 'dd/MM/yyyy', new Date());
		const dateB = parse(b.date, 'dd/MM/yyyy', new Date());

		return dateB.getTime() - dateA.getTime();
	});

	return {
		works: works,
		seo: {
			title: 'Mes projets',
			description: 'Découvrez mes projets et mes réalisations'
		}
	};
}
