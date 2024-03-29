import type { WorksApi } from '$lib/types/worksApi';

export async function load({ fetch, data }) {
	const worksResponse = await fetch('./api/works');
	if (!worksResponse.ok) throw new Error(`Failed to load works: ${worksResponse.statusText}`);
	let works: WorksApi[] = await worksResponse.json();
	works = works.sort(() => Math.random() - 0.5);
	works = works.slice(0, 3);

	return { works: works, ...data };
}
