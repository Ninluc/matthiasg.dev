<script lang="ts">
	import TextLink from '$components/theme/TextLink.svelte';

	export let categoryTitle: string = '';
	export let links: { [title: string]: { href: string; sub?: { [subtitle: string]: string } } };
</script>

<article>
	<header>
		<h2>{categoryTitle}</h2>
	</header>
	<ul>
		{#each Object.entries(links) as [linkTitle, linkHref]}
			<li>
				<TextLink href={linkHref.href}>{linkTitle}</TextLink>
				{#if linkHref.sub}
					<ul class="subLinks">
						{#each Object.entries(linkHref.sub) as [subLinkTitle, subLinkHref]}
							<li>
								<!-- If the link already ends with /, only append # -->
								<TextLink
									href={linkHref.href + (linkHref.href.endsWith('/') ? '#' : '/#') + subLinkHref}
									target="_blank">{subLinkTitle}</TextLink
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

				ul.subLinks {
					margin: $gap-small 0 $gap-medium $gap-big;

					li {
					}
				}
			}
		}
	}
</style>
