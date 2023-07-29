<script lang="ts">
	import ContentAfterBigTextSection from '../ContentAfterBigTextSection.svelte';
	import { write } from '$components/theme/transition/write';
	import { getStringFromChars } from '$lib/scripts/stringsBuilder';
	import { charTyping } from '$components/theme/transition/charTyping';
	import { onMount } from 'svelte';

	let animationLaunched = false;

	const basicDelay = 30;

	const abstractCodeText = '∗∗∗-';
	let randomAbstractCodeText = getStringFromChars(abstractCodeText, 2, 8);

	const mainAstractCharacters = '$X*x%/-_:';
	const typingSpeed = 3;

	function getRandomFact(): Promise<string> {
		return fetch('/api/randomFact')
			.then((res) => res.json())
			.then((res) => {
				return res;
			});
	}

	let randomFact: string;
	onMount(async () => {
		randomFact = await getRandomFact();
	});

	const age = new Date().getFullYear() - 2003;
</script>

<ContentAfterBigTextSection
	intersectionCallback={() => {
		animationLaunched = true;
	}}
>
	<article class="profiler">
		<div class="code1">
			<div>Profiler_App</div>
			<div>V0.2xx[beta]</div>
		</div>

		<div class="photo">
			<img src="/assets/photos/me.webp" alt="moi" srcset="/assets/photos/me.png" />
		</div>

		<div class="code2">
			{#if animationLaunched}
				<div in:write={{ speed: 1, delay: basicDelay + 300 }}>{randomAbstractCodeText}</div>
				<div />
			{/if}
		</div>

		{#if randomFact !== undefined && animationLaunched}
			<div class="white-text">
				<div
					in:charTyping={{
						speed: typingSpeed,
						delay: basicDelay + 300,
						characters: mainAstractCharacters,
						trailingRdCharacterMaxNumber: 3
					}}
				>
					Guillitte, Matthias
				</div>
				<div
					in:charTyping={{
						speed: typingSpeed,
						delay: basicDelay + 300,
						characters: mainAstractCharacters,
						trailingRdCharacterMaxNumber: 3
					}}
				>
					{@html randomFact}
				</div>
			</div>
		{/if}

		<div class="black-text">
			{#if animationLaunched}
				<div
					in:charTyping={{
						speed: typingSpeed,
						delay: basicDelay + 300,
						characters: mainAstractCharacters,
						trailingRdCharacterMaxNumber: 3
					}}
				>
					Âge: {age} ans
				</div>
				<div
					in:charTyping={{
						speed: typingSpeed,
						delay: basicDelay + 300,
						characters: mainAstractCharacters,
						trailingRdCharacterMaxNumber: 3
					}}
				>
					Statut: Étudiant à Helmo
				</div>
			{/if}
		</div>
	</article>
</ContentAfterBigTextSection>

<style lang="scss">
	article.profiler {
		display: grid;
		grid-template-columns: 0.258fr $gap-medium 1fr;
		grid-template-rows: 72px min-content min-content 31px 25px;
		grid-column-gap: 0px;
		grid-row-gap: 0px;

		.code1,
		.code2 {
			padding: 9px 12px 9px 4px;

			font: $profiler_code;
			line-height: $lineheight-profiler-code;
			letter-spacing: $letterspacing-profiler-code;
			color: $color-primary;

			div {
				background-color: $color-profilerblack;
			}

			div:first-child {
				width: 100%;
			}

			div:nth-child(2) {
				width: 90%;
			}
		}

		.white-text,
		.black-text {
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			div:first-child {
				width: fit-content;
			}

			div:nth-child(2) {
				width: 100%;
			}
		}

		.code1 {
			padding-bottom: 2px;

			grid-area: 1 / 1 / 2 / 3;

			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: flex-start;
		}
		.photo {
			grid-area: 2 / 1 / 4 / 2;

			img {
				max-width: 100%;
				border: $color-profilerblack 5px solid;
			}
		}
		.code2 {
			grid-area: 4 / 1 / 6 / 2;

			div:nth-child(2) {
				height: 28px;
			}
		}
		.black-text {
			padding: $gap-medium 20% 0 ($gap-medium - 5);

			justify-content: flex-start;
			gap: 4px;
			grid-area: 3 / 2 / 5 / 4;

			font: $profiler-secondary;

			line-height: $lineheight-profiler-secondary;
			letter-spacing: $letterspacing-profiler-secondary;
			color: $color-primary;

			div {
				padding: ($gap-small + $gap-small * 0.5) $gap-big 0px $gap-medium;

				background-color: $color-profilerblack;
			}
		}
		.white-text {
			justify-content: flex-end;
			gap: 17px;
			grid-area: 1 / 3 / 3 / 4;

			font: $profiler-main;

			line-height: $lineheight-profiler-main;
			letter-spacing: $letterspacing-profiler-main;
			color: $color-profilerblack;

			div {
				background-color: $color-primary;
				padding: $gap-medium $gap-big $gap-medium $gap-small;
			}

			div:nth-child(2) {
				position: relative;

				$arrow-width: 42px;
				&::before {
					content: '';

					position: absolute;
					left: -$arrow-width;
					top: 0px;

					width: $arrow-width;
					height: 100%;

					background-color: inherit;

					clip-path: polygon(0 50%, 100% 100%, 100% 0);
				}
			}
		}

		@media only screen and (max-width: $screen-xsmall) {
			grid-template-columns: 30% $gap-medium 70%;
		}

		@media only screen and (max-width: $screen-xxsmall) {
			grid-template-columns: 40% $gap-medium 60%;
		}
	}
</style>
