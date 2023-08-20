<script lang="ts">
	import * as ackeeTracker from 'ackee-tracker';

	import { browser } from '$app/environment';
	import Button from '$components/theme/Button.svelte';
	import ContentAfterBigTextSection from '../ContentAfterBigTextSection.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { setAckeeTracker, tracker } from '$stores/ackee';
	import VisuallyHiddenTitle from '$components/theme/misc/VisuallyHiddenTitle.svelte';

	export const headingLevel: number = 3;
	const heading = 'h' + headingLevel.toString();

	// Form
	export let formData;

	let errorMessage: string | undefined = undefined;
	let formIsValid: boolean = false;

	const { form, errors, enhance, constraints, delayed } = superForm(formData, {
		onUpdated({ form }) {
			if (form.valid) {
				formIsValid = true;
			}
		},
		onError({ result }) {
			errorMessage = 'Un problème est survenu : ' + result.error.message;
		},
		// taintedMessage: 'Le message ne sera pas envoyé !',
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

	// Ackee
	function ackeeReached() {
		if (browser) {
			if (!$tracker) {
				setAckeeTracker();
			}
			$tracker?.action(import.meta.env.VITE_ACKEE_ACTION__REACHED_CONTACT, {
				key: 'reached-contact',
				value: 1
			});
		}
	}
</script>

<!-- <svelte:head>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
	<script>
		function onSubmit(token) {
			console.log(token);
			document.getElementById('contact-form').submit();
		}
	</script>
</svelte:head> -->

<ContentAfterBigTextSection id="contact" intersectionCallback={ackeeReached}>
	<!-- Visually hidden title -->
	<VisuallyHiddenTitle headingLevel={2}>Formulaire de contact</VisuallyHiddenTitle>

	<form method="post" id="contact-form" use:enhance>
		<!-- <p>Captcha : {$form["g-recaptcha-response"]}</p> -->
		<!-- <SuperDebug data={$form} /> -->
		<svelte:element this={heading} class="form-title">Contact</svelte:element>

		{#if formIsValid}
			<p class="success">Votre message a été envoyé !</p>
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
			<!-- class="g-recaptcha"
				data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
				data-callback="onSubmit"
				data-theme="dark" -->
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

			border: 1px solid $color-primary;
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
