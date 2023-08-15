import type { ProjectType } from '$lib/types/worksApi';

export const categoryColors: {
	[key in ProjectType]: {
		background: string;
		color: string;
	};
} = {
	personnel: {
		background: '#567c78',
		color: '#d4d6d7'
	},
	profesionnel: {
		background: '#EAB308',
		color: '#000000'
	},
	scolaire: {
		background: '#d41976',
		color: '#d4d6d7'
	},
	tous: {
		background: '#d4d6d7',
		color: '#000000'
	}
};
