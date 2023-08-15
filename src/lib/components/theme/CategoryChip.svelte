<script lang="ts">
	import type { ProjectType } from '$lib/types/worksApi';
	import { categoryColors } from '$stores/layout/worksCategory';

	export let category: ProjectType;
</script>

<article
	class="category"
	style="background-color: {categoryColors[category].background}; color: {categoryColors[category]
		.color};"
>
	#{category}
</article>

<style lang="scss">
	.category {
		padding: $gap-medium;

		font: $main;
		line-height: $lineheight-main;

		border-radius: $theme-borderradius;

		@media only screen and (max-width: $screen-xsmall) {
			padding: $gap-small;
		}
	}
</style>
