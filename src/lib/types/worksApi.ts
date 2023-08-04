export type ProjectType = 'personnel' | 'profesionnel' | 'scolaire';

export type WorksApi = {
	title: string;
	category: ProjectType;
	slug: string;
	date: string;
	projectDate?: string;
	projectLink?: string;
	description: string;
};
