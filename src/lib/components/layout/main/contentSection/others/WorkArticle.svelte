<script lang="ts">
	import type { WorksApi } from '$lib/types/worksApi';
	import { PREVIEW_IMG_FOLDER, getWorkPreviewImage } from '$lib/scripts/layout/getWorkPreviewImg';
	import Img from '@zerodevx/svelte-img';
	import Button from '$components/theme/Button.svelte';

	export let work: WorksApi;

	export const headingLevel: number = 3;
	const heading = 'h' + headingLevel.toString();

	const previewImg = getWorkPreviewImage(work.slug) as unknown as any[];
	let previewImgTag: any;
	let previewAlt = '';
	const previewImgHover = getWorkPreviewImage(work.slug + '__hover') as unknown as any[];
	let previewImgHoverTag: any;
	let previewAltHover = '';

	if (previewImgHover) {
		previewAlt = 'Logo de ' + work.title;
		previewAltHover = 'Prévisualisation de ' + work.title;
	} else {
		previewAlt = 'Prévisualisation de ' + work.title;
	}
</script>

<article class="work">
	<a href="/projects/{work.slug}">

		<div class="image-container">
			<Img
				src={previewImg}
				alt={previewAlt}
				loading="eager"
				bind:this={previewImgTag}
				on:load={() => {
					previewImgTag['$$'].ctx[0].style.background = '';
				}}
			/>
			{#if previewImgHover}
				<Img
					src={previewImgHover}
					alt={previewAltHover}
					loading="eager"
					bind:this={previewImgHoverTag}
					on:load={() => {
						// console.log((previewImgHoverTag['$$'].ctx[0].style.background = ''));
						previewImgHoverTag['$$'].ctx[0].style.background = '';
					}}
				/>
			{/if}
			<!-- {/if} -->
			<!-- {/await} -->
		</div>
		<div class="text-container">
			<svelte:element this={heading} class="work-title" data-nosnippet>{work.title}</svelte:element>
	
			<!-- <p class="description">{@html work.description}</p>-->
			<!-- CHANGEME when update fix the @html issue https://github.com/kelvinsjk/sveltekitHTMLTag -->
			<!-- Bug description : The description doesn't 'swap' with the rest of the content -->
			<p class="description" data-nosnippet>{work.description}</p>
	
			<div class="button-container">
				{#if work.projectLink}
					<Button
						href={work.projectLink}
						colorType="secondary"
						target="blank"
						rel="noopener noreferrer external"
						>{@html work.projectLink.startsWith('https://github.com/')
							? 'Accéder au dépôt'
							: 'Accéder au site'}</Button
					>
				{/if}
				<Button href="/projects/{work.slug}" type="cta">Lire plus</Button>
			</div>
		</div>
	</a>
</article>

<style lang="scss">
	article.work {
		
		background-color: $color-secondary;
		border-radius: $theme-borderradius;
		
		overflow: hidden;
		
		a {
			display: flex;
			flex-direction: row;
			align-items: stretch;
			text-decoration: none;

			div.image-container {
				width: 31%;
	
				aspect-ratio: 1 / 1;
	
				position: relative;
	
				:global(picture) {
					width: 100%;
					height: 100%;
	
					:global(img) {
						width: 100%;
						height: 100%;
						object-fit: contain;
	
						background-color: $color-secondary !important;
	
						--reveal-scale: 1.03;
						--reveal-opacity-duration: 1s;
						--reveal-transform-duration: 0.6s;
					}
				}
	
				:global(picture:nth-child(2)) {
					position: absolute;
					top: 0;
					left: 0;
	
					:global(img) {
						opacity: 0;
	
						object-fit: cover;
	
						pointer-events: none;
						z-index: 5;
	
						transition: opacity $transition-time-medium $transition-timingfunction;
					}
				}
			}
	
			div.text-container {
				padding: $theme-borderradius;
				flex: 1;
	
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				gap: $gap-medium;
	
				.work-title {
					margin: 0;
	
					font: $headerlink;
					color: $color-primary;
					// font-size: 32px;
	
					transform: skewX(-9deg);
				}
	
				p.description {
					display: block;
	
					font: $main;
					color: $color-primary;
	
					:global(a) {
						@include linkMain;
						font-style: normal;
						color: $color-tertiary;
	
						transition: color $transition-time-small $transition-timingfunction;
	
						&:hover,
						&:focus {
							color: $color-tertiary-700;
						}
					}
				}
	
				div.button-container {
					margin-top: auto;
	
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
					gap: $gap-medium;
				}
			}
	
		}

		&:hover,
		&:focus-within {
			:global(picture:nth-child(2)) {
				:global(img) {
					opacity: 1 !important;
					pointer-events: all !important;
				}
			}
		}

		@media only screen and (max-width: $screen-xsmall) {
			padding-top: 20%;

			position: relative;

			flex-direction: column;

			overflow: hidden;

			a {

				div.image-container {
					position: absolute;
	
					top: 0px;
					left: 0px;
	
					width: 100%;
	
					transform: translateY(-40%);
	
					&::after {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
	
						width: 100%;
						height: 100%;
	
						background-image: linear-gradient(0deg, rgba(30, 31, 35, 1) 23%, rgba(30, 31, 35, 0) 80%);
					}
				}
	
				div.text-container {
					z-index: 100;
				}
			}
		}
	}

	:global(main section.content-section.content-section__appear) {
		article.work {
			opacity: 1 !important;
		}
	}
</style>
