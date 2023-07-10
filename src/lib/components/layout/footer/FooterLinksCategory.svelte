<script lang="ts">
	import TextLink from '$components/theme/TextLink.svelte';
	import type { Page, SubLink } from '$stores/layout/pages';

	export let categoryTitle: string = '';
	export let links: Page[];

	function getLinkForSub(link: Page, sub: SubLink): string {
		if ('subId' in sub) {
			return link.path + (link.path.endsWith('/') ? '#' : '/#') + sub.subId;
		} else {
			return sub.subLink;
		}
	}
</script>

<article>
	<header>
		<h2>{categoryTitle}</h2>
	</header>
	<ul>
		{#each links as link}
			<li>
				<TextLink href={link.path} target={link.path.startsWith('http') ? '_blank' : '_self'}
					>{link.title}</TextLink
				>
				{#if link.sub}
					<ul class="sub-links">
						{#each link.sub as subLink}
							<li>
								<!-- If the link already ends with /, only append # -->
								<TextLink
									href={getLinkForSub(link, subLink)}
									target={link.path.startsWith('http') ? '_blank' : '_self'}
									>{subLink.subTitle}</TextLink
								>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</article>

<style lang="scss">
	article {
		// width: 100%;

		header {
			h2 {
				margin-bottom: $gap-big;

				font: $main;
				color: $color-primary-500;

				text-align: center;
				/* Don"t break text */
				white-space: nowrap;
			}
		}

		ul {
			padding: 0px;
			list-style-type: none;
		}

		& > ul {
			li {
				/* Title link and sublink */
				:global(a) {
					margin: $gap-small 0;

					font-size: 1.3em;
				}

				/* Don"t break text */
				white-space: nowrap;

				&:not(:last-child) {
					margin-bottom: 0.5rem;
				}

				ul.sub-links {
					margin: $gap-small 0 $gap-medium $gap-big;

					li {
					}
				}
			}
		}
	}
</style>
