<script lang="ts">
	import type { ProjectType } from '$lib/types/worksApi';
	import { categoryColors } from '$stores/layout/worksCategory';

	export let category: ProjectType;
</script>

<a
	href="/projects?category={category}"
	class="category"
	style="background-color: {categoryColors[category].background}; color: {categoryColors[category]
		.color};"
>
	#{category}
</a>

<style lang="scss">
	.category {
		padding: $gap-medium;

		font: $main;
		line-height: $lineheight-main;

		text-decoration: none;

		border-radius: $theme-borderradius;

		transition: all $transition-time-small $transition-timingfunction;

		&:hover, &:focus {
			filter: brightness(0.9);
		}

		@media only screen and (max-width: $screen-xsmall) {
			padding: $gap-small;
		}
	}
</style>
