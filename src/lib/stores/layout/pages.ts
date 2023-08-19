import { readable, type Readable } from 'svelte/store';

// Types
export type LinkParameters = { [paramName: string]: string };

export type InternalSubLink =
	| {
			subId: string;
	  }
	| {
			params: LinkParameters;
	  }
	| {
			subId: string;
			params: LinkParameters;
	  };

export type ExternalSubLink = {
	subLink: string;
};
export type SubLink = {
	subTitle: string;
} & (InternalSubLink | ExternalSubLink);

export interface Page {
	pageName: string;
	path: string;
	title: string;
	displayOnHeader?: boolean;
	sub?: SubLink[];
}

// Stores
export const pages: Readable<Page[]> = readable([
	{
		pageName: 'Accueil',
		path: '/',
		title: 'Accueil',
		sub: [
			{
				subTitle: 'À propos de moi',
				subId: 'me'
			},
			{
				subTitle: 'Quelques projets',
				subId: 'some-projects'
			},
			{
				subTitle: 'Me contacter',
				subId: 'contact'
			}
		]
	},
	{
		pageName: 'Tous mes projets',
		path: '/projects',
		title: 'Mes projets',
		sub: [
			{
				subTitle: 'Projets personnels',
				params: { category: 'personnel' }
			},
			{
				subTitle: 'Projets scolaires',
				params: { category: 'scolaire' }
			},
			{
				subTitle: 'Projets professionnel',
				params: { category: 'profesionnel' }
			}
		]
	},
	{
		pageName: 'Hugo',
		path: '/panda',
		title: 'Soutien à Hugo',
		displayOnHeader: false,
		sub: [
			{
				subTitle: 'Faire un don',
				subId: 'donation'
			}
		]
	}
]);
