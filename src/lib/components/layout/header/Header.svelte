<script lang="ts">
	// import { headerHeight } from '$stores/layout/headerHeight';
	import HeaderLink from './HeaderLink.svelte';
</script>

<!-- <header bind:offsetHeight={$headerHeight}> -->
<header>
	<nav>
		<ul>
			<li>
				<HeaderLink href="/">Accueil</HeaderLink>
			</li>
			<li>
				<HeaderLink href="/projects">Mes projets</HeaderLink>
			</li>
			<li>
				<HeaderLink href="/#contact">Contact</HeaderLink>
			</li>
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

		z-index: 100;

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
