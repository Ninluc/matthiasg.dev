import { readable, type Readable } from 'svelte/store';

export interface Page {
	pageName: string;
	path: string;
	title: string;
	displayOnHeader?: boolean;
	sub?: SubLink[];
}
export type SubLink = {
	subTitle: string;
} & (
	| {
			subId: string;
	  }
	| {
			subLink: string;
	  }
);

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
				subId: 'personal'
			},
			{
				subTitle: 'Projets scolaires',
				subId: 'school'
			},
			{
				subTitle: 'Projets professionnel',
				subId: 'professional'
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
