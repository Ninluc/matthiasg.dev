<script lang="ts">
	import { browser } from '$app/environment';
	import Button from '$components/theme/Button.svelte';
	import { onMount } from 'svelte';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import ContentAfterBigTextSection from '../ContentAfterBigTextSection.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { sendDiscordWebhook } from '$lib/scripts/misc/sendDiscordWebHook';
	import type { s } from 'vitest/dist/types-198fd1d9';
	import { writable } from 'svelte/store';

	export const headingLevel: number = 3;
	const heading = 'h' + headingLevel.toString();

	// Form
	export let formData;

	let errorMessage: string | undefined = undefined;
	let formIsValid: boolean = false;

	const { form, errors, enhance, constraints, delayed } = superForm(formData, {
		onUpdated({ form }) {
			if (form.valid) {
				console.log('Form is valid');
				formIsValid = true;
			}
		},
		onError({ result }) {
			errorMessage = 'Un problème est survenu : ' + result.error.message;
		},
		taintedMessage: 'Le message ne sera pas envoyé !',
		validators: {
			mail: (mail) => {
				if (!mail) return 'Veuillez entrer une adresse email';
				if (!mail.includes('@')) return 'Veuillez entrer une adresse email valide';
			},
			message: (message) => {
				if (!message) return 'Veuillez entrer un message';
				if (message.length >= 2000 - 37) return 'Veuillez entrer un message plus court';
			}
		}
	});
</script>

<ContentAfterBigTextSection id="contact">
	<form method="post" id="contact-form" use:enhance>
		<!-- <SuperDebug data={$form} /> -->
		<svelte:element this={heading} class="form-title">Contact</svelte:element>

		{#if formIsValid}
			<p class="success">Le message a été envoyé !</p>
		{:else}
			<!-- Server error -->
			{#if errorMessage}
				<p class="error">{errorMessage}</p>
			{/if}

			<input
				type="email"
				name="mail"
				id="mail"
				placeholder="Email de contact"
				autocapitalize="true"
				autocomplete="email"
				bind:value={$form.mail}
				aria-invalid={$errors.mail ? 'true' : undefined}
				{...$constraints.mail}
			/>
			{#if $errors.mail}
				<p class="error">{$errors.mail}</p>
			{/if}
			<textarea
				name="message"
				id="message"
				placeholder="Message"
				bind:value={$form.message}
				aria-invalid={$errors.message ? 'true' : undefined}
				{...$constraints.message}
			/>
			{#if $errors.message}
				<p class="error">{$errors.message}</p>
			{/if}

			<Button
				buttonType="button"
				type="submit"
				colorType={$delayed ? 'busy' : 'cta'}
				aria-busy={$delayed}
				disabled={$delayed}>Envoyer</Button
			>
		{/if}
	</form>
</ContentAfterBigTextSection>

<style lang="scss">
	form {
		width: 100%;

		padding: $gap-big;

		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: $gap-medium;

		background-color: $color-secondary;

		border-radius: $theme-borderradius;

		opacity: 0;

		transition: opacity $transition-time-long $transition-timingfunction;

		.form-title {
			margin: 0;

			font: $headerlink;
			color: $color-primary;
			// font-size: 32px;

			transform: skewX(-9deg);
		}

		input,
		textarea {
			width: 100%;

			padding: $gap-medium;

			border: 1px solid #d4d6d7;
			border-radius: $theme-borderradius;

			&[aria-invalid='true'] {
				background-color: $color-error-200;

				border-color: $color-error;
			}
		}

		input,
		textarea,
		button {
			font: $main;
			color: $font-color-on-primary;

			background-color: $color-primary;
		}

		textarea {
			height: 40vh;
			min-height: calc(($theme-borderradius * 2) + 1ch);

			resize: vertical;
		}

		:global(button) {
			width: fit-content;

			align-self: flex-end;
		}

		p.success {
			font: $main;

			color: $color-success;
		}

		p.error {
			margin-left: $gap-medium;

			font: $main;
			font-size: 75%;

			color: $color-error;
		}
	}

	:global(main section.content-section.content-section__appear) form#contact-form {
		opacity: 1;
	}
</style>
