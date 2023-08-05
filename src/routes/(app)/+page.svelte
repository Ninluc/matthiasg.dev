<script>
	import BigTextSection from '$components/layout/main/contentSection/BigTextSection.svelte';
	import ContentAfterBigTextSection from '$components/layout/main/contentSection/ContentAfterBigTextSection.svelte';
	import ContentSection from '$components/layout/main/contentSection/base/ContentSection.svelte';
	import HelloHeadsSection from '$components/layout/main/contentSection/helloHeads/HelloHeadsSection.svelte';
	import ContactForm from '$components/layout/main/contentSection/others/ContactForm.svelte';
	import Profiler from '$components/layout/main/contentSection/others/Profiler.svelte';
	import WorksList from '$components/layout/main/contentSection/others/WorksList.svelte';
	import Button from '$components/theme/Button.svelte';

	export let data;
</script>

<HelloHeadsSection />

<BigTextSection>Je m'appelle</BigTextSection>
<Profiler />
<BigTextSection>Et je fais des trucs...</BigTextSection>
<WorksList works={data.works} />
<BigTextSection>Vous voulez me contacter ?</BigTextSection>
<ContactForm formData={data.form} />
<ContentAfterBigTextSection
	><iframe
		width="100%"
		height="480px"
		src="https://www.watchisup.fr/compte-a-rebours/embed/quitter-la-maison-2023-09-01-00-00?backgroundcolor=%23232328&color=%23d4d6d7"
		frameborder="0"
		allowfullscreen
		title="temps restant au petit hugo"
	/>
	<Button
		href="https://paypal.me/hugostevens96"
		target="_blank"
		rel="noopener noreferrer"
		title="T'as pas liké les petits pandas ?">Faire un don</Button
	>
</ContentAfterBigTextSection>

<style lang="scss">
</style>
