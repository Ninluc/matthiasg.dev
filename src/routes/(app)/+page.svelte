<script>
	import BigTextSection from '$components/layout/main/contentSection/BigTextSection.svelte';
	import HelloHeadsSection from '$components/layout/main/contentSection/helloHeads/HelloHeadsSection.svelte';
	import ContactForm from '$components/layout/main/contentSection/others/ContactForm.svelte';
	import Profiler from '$components/layout/main/contentSection/others/Profiler.svelte';
	import WorksList from '$components/layout/main/contentSection/others/WorksList.svelte';

	export let data;
</script>

<HelloHeadsSection />

<BigTextSection>Je m'appelle</BigTextSection>
<Profiler />
<BigTextSection>Et je fais des trucs...</BigTextSection>
<WorksList works={data.works} />
<BigTextSection>Vous voulez me contacter ?</BigTextSection>
<ContactForm formData={data.form} />
