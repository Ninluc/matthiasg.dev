<script lang="ts">
	import { PREVIEW_IMG_FOLDER } from '$lib/scripts/layout/getWorkPreviewImg';
	import ContentAfterBigTextSection from '$components/layout/main/contentSection/ContentAfterBigTextSection.svelte';
	import ContentSection from '$components/layout/main/contentSection/base/ContentSection.svelte';
	import Button from '$components/theme/Button.svelte';
	import VisuallyHiddenTitle from '$components/theme/misc/VisuallyHiddenTitle.svelte';
</script>

<ContentAfterBigTextSection>
	<!-- Visually hidden title -->
	<VisuallyHiddenTitle headingLevel={1}>Soutient à Hugo</VisuallyHiddenTitle>

	<iframe
		width="100%"
		height="480px"
		src="https://www.watchisup.fr/compte-a-rebours/embed/quitter-la-maison-2023-09-01-00-00?backgroundcolor=%23232328&color=%23d4d6d7"
		frameborder="0"
		allowfullscreen
		title="temps restant au petit hugo"
	/>
</ContentAfterBigTextSection>
<ContentSection id="donation">
	<!-- Visually hidden title -->
	<VisuallyHiddenTitle headingLevel={2}>Explications et donations</VisuallyHiddenTitle>

	<p>...c'est le temps restant avant que Hugo ne se fasse expulser de son foyer.</p>
	<p>Pour le soutenir, faites un don :</p>
	<Button
		href="https://paypal.me/hugostevens96"
		target="_blank"
		rel="noopener noreferrer"
		title="T'as pas liké les petits pandas ?">Faire un don</Button
	>
</ContentSection>

<style lang="scss">
	:global(main > div > section) {
		height: auto;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		font: $main;
		color: $color-primary;

		p {
			width: 100%;
			text-align: left;
		}

		iframe {
			display: block;
			min-height: 480px;
		}
	}
</style>
