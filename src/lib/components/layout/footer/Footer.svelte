<script lang="ts">
	import { pages, type Page } from '$stores/layout/pages';
	import FooterLinksCategory from './FooterLinksCategory.svelte';
	// import { headerHeight } from '$stores/layout/headerHeight';
	import FooterIcon from './FooterIcon.svelte';

	const icons = {
		'stackoverflow.svg': {
			href: 'https://stackoverflow.com/users/13727920/ninluc',
			alt: 'Stack overflow'
		},
		'github.svg': { href: 'https://github.com/Ninluc', alt: 'Github' },
		'linkedin.svg': {
			href: 'https://www.linkedin.com/in/matthias-guillitte-9046ab293',
			alt: 'Linkedin'
		}
	};
	const iconsFolder: string = '/img/footerIcons/';

	const links: {
		[categoryTitle: string]: Page[];
	} = {
		'Pages et sections': $pages,
		'Liens intéressant': [
			{
				pageName: 'Dépôt de ce site (Github)',
				path: 'https://github.com/Ninluc/matthiasg.dev',
				title: 'Dépôt de ce site (Github)',
				sub: [
					{
						subLink: 'https://github.com/Ninluc/matthiasg.dev/blob/main/README.md',
						subTitle: 'README'
					}
				]
			}
		]
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
		height: calc(100vh - clamp(51px, 2vh, 50vh));

		padding: $gap-big 0;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: $gap-big;

		background-color: $color-completelyblack;

		section.icons-container {
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: min(42px, 10vw);
		}

		section.links-container {
			width: clamp(100px, 65%, 90vw);

			/* All children are the same size and take the less space possible */
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			gap: $gap-big;

			overflow-y: auto;
		}

		@media only screen and (max-width: $screen-xxsmall) {
			// row-gap: $gap-small;
		}
	}
</style>
