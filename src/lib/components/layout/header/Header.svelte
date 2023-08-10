<script lang="ts">
	import { pages, type SubLink } from '$stores/layout/pages';
	import { fade } from 'svelte/transition';
	// import { headerHeight } from '$stores/layout/headerHeight';
	import HeaderLink from './HeaderLink.svelte';
	import { cubicOut } from 'svelte/easing';

	export let oldPath: undefined | string = undefined;
	export let currentPath: typeof oldPath = undefined;

	let links: {
		pageName?: string;
		path: string;
		title: string;
		displayOnHeader?: boolean;
		sub?: SubLink[];
	}[];
	links = [
		...$pages,
		{
			path: '/#contact',
			title: 'Contact'
		}
	];
</script>

<!-- <header bind:offsetHeight={$headerHeight}> -->
<header>
	{#if oldPath && links.find((l) => l.path === currentPath) == undefined}
		<div class="backbutton-container">
			<a
				href={oldPath}
				class="backbutton"
				transition:fade={{ easing: cubicOut, duration: 300, delay: 200 }}>← Retour</a
			>
		</div>
	{/if}
	<nav>
		<ul>
			<!-- <li>
				<HeaderLink href="/">Accueil</HeaderLink>
			</li> -->
			{#each Object.entries(links) as [title, value]}
				{#if value.displayOnHeader == undefined || value.displayOnHeader}
					<li>
						<HeaderLink href={value.path}>{value.title}</HeaderLink>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	$headerVerticalPadding: 68px;

	header {
		width: 100%;
		min-height: 51px;
		height: 6.2vh;
		max-height: 50vh;

		position: fixed;
		top: 0px;
		left: 0px;

		padding: 0px $headerVerticalPadding;

		display: flex;
		justify-content: space-between;
		align-items: center;

		background-color: $color-completelyblack;

		z-index: 1000;

		.backbutton-container {
			.backbutton {
				font: $main;
				color: $color-primary;
				text-decoration: none;

				white-space: nowrap;
			}
		}

		nav {
			flex: 1;

			display: flex;
			justify-content: flex-end;
			align-items: center;

			ul {
				width: max-content;

				display: flex;
				justify-content: space-around;
				align-items: center;
				column-gap: $headerVerticalPadding;

				list-style-type: none;
			}
		}
	}

	@media only screen and (max-width: $screen-medium) {
		$headerVerticalPadding: $headerVerticalPadding - 15px;
		header {
			padding: 0px $headerVerticalPadding;
			nav {
				ul {
					column-gap: $headerVerticalPadding;
				}
			}
		}
	}

	@media only screen and (max-width: $screen-small) {
		$headerVerticalPadding: $headerVerticalPadding - 20px;
		header {
			padding: 0px $headerVerticalPadding;
			nav {
				ul {
					column-gap: $headerVerticalPadding;
				}
			}
		}
	}

	@media only screen and (max-width: $screen-xsmall) {
		$headerVerticalPadding: $headerVerticalPadding - 40px;
		header {
			padding: 0px $headerVerticalPadding;
			nav {
				ul {
					column-gap: $headerVerticalPadding;
				}
			}
		}
	}

	@media only screen and (max-width: $screen-xxsmall) {
		$headerVerticalPadding: $headerVerticalPadding - 50px;
		header {
			padding: 0px $headerVerticalPadding;
			nav {
				ul {
					column-gap: $headerVerticalPadding;
				}
			}
		}
	}
</style>
