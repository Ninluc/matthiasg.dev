export type ProjectType = 'personnel' | 'professionnel' | 'scolaire' | 'tous';

export type WorksApi = {
	title: string;
	category: ProjectType;
	slug: string;
	date: string;
	projectDate?: string;
	projectLink?: string;
	description: string;
};
