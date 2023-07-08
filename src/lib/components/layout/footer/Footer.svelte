<script lang="ts">
	import FooterLinksCategory from './FooterLinksCategory.svelte';
	// import { headerHeight } from '$stores/layout/headerHeight';
	import FooterIcon from './FooterIcon.svelte';

	const icons = {
		'github-mark.svelte': { href: 'https://github.com/Ninluc', alt: 'Github' }
	};
	const iconsFolder: string = './footerIcons/';

	const links: {
		[categoryTitle: string]: {
			[title: string]: { href: string; sub?: { [subtitle: string]: string } };
		};
	} = {
		'Pages et sections': {
			Accueil: {
				href: '/',
				sub: {
					'À propos de moi': 'me',
					'Quelques projets': 'some-projects',
					'Me contacter': 'contact'
				}
			},
			'Tous mes projets': {
				href: '/projects',
				sub: {
					'Projets personnels': 'personal',
					'Projets scolaires': 'school',
					'Projets professionnels': 'professional'
				}
			}
		},
		'Liens intéressant': {
			'Dépôt de ce site (Github)': {
				href: 'https://github.com/Ninluc/matthiasg.dev'
			}
		}
	};
</script>

<!-- <footer style="--headerHeight: {$headerHeight}px;"> -->
<footer>
	<section class="icons-container">
		{#each Object.entries(icons) as [icon, attr]}
			<FooterIcon imgPath={iconsFolder + icon} alt={attr.alt} href={attr.href} />
		{/each}
	</section>
	<section class="links-container">
		{#each Object.entries(links) as [category, linksList]}
			<FooterLinksCategory categoryTitle={category} links={linksList} />
		{/each}
	</section>
</footer>

<style lang="scss">
	footer {
		// height: calc(100dvh - var(--headerHeight));
		height: calc(100dvh - clamp(51px, 2vh, 50vh));

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: $gap-big;

		background-color: $color-completelyblack;

		// REMOVEME
		color: green;

		section.icons-container {
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: $gap-medium;
		}

		section.links-container {
			width: clamp(300px, 65%, 90vw);

			/* All children are the same size and take the less space possible */
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			gap: $gap-medium;
		}
	}
</style>
