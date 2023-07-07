<script lang="ts">
	import FooterIcon from './FooterIcon.svelte';

	const icons = {
		'github-mark.svelte': { href: 'https://github.com/Ninluc', alt: 'Github' }
	};

	const iconsFolder: string = './footerIcons/';
</script>

	<section class="icons-container">
		{#each Object.entries(icons) as [icon, attr]}
			<FooterIcon imgPath={iconsFolder + icon} alt={attr.alt} href={attr.href} />
		{/each}
	</section>
	<section class="links-container" />
</footer>

<style lang="scss">
	footer {

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-color: $color-completelyblack;

		// REMOVEME
		color: green;

		section.icons-container {
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: $gap-medium;
		}
	}
</style>
