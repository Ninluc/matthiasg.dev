<script lang="ts">
	import { page } from '$app/stores';
	import type { ProjectType } from '$lib/types/worksApi';
	import { categoryColors } from '$stores/layout/worksCategory';

	export let category: ProjectType;

	let currentCategory: string | null;
	$: currentCategory = $page.url.searchParams.get('category');
	let isCurrentCategory: boolean;
	$: isCurrentCategory =
		(currentCategory == null && category == 'tous') || currentCategory == category;
</script>

<a
	data-sveltekit-noscroll
	href="./projects?category={category}"
	class="category"
	class:current={isCurrentCategory}
	style="--background-color: {categoryColors[category].background}; --hover-color: {categoryColors[
		category
	].color};"
	data-nosnippet
>
	#{category}
</a>

<style lang="scss">
	.category {
		padding: $gap-medium;

		font: $main;
		line-height: $lineheight-main;

		color: $color-primary;

		text-decoration: none;

		border: solid 3px var(--background-color);
		border-radius: $theme-borderradius;

		cursor: pointer;

		transition: all $transition-time-small $transition-timingfunction;

		&:hover,
		&:focus {
			color: #fff;
		}

		&:active,
		&.current {
			background-color: var(--background-color);
			color: var(--hover-color);
		}

		@media only screen and (max-width: $screen-xsmall) {
			padding: $gap-small;
		}
	}
</style>
