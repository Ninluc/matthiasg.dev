import type { WorksApi } from '$lib/types/worksApi';

export async function load({ fetch }) {
	const response = await fetch('/api/works');
	let works: WorksApi[] = await response.json();
	works = works.sort(() => Math.random() - 0.5);
	works = works.slice(0, 3);

	return { works: works };
}
