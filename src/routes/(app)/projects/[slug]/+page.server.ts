import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	const slugs = [];

	const paths = import.meta.glob('/src/works/*.md', { eager: true });

	for (const path in paths) {
		const slug = path.split('/').at(-1)?.replace('.md', '');
		slugs.push({ slug: slug as string });
	}

	return slugs;
};

export const prerender = true;
