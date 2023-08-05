<script>
	import BigTextSection from '$components/layout/main/contentSection/BigTextSection.svelte';
	import ContentAfterBigTextSection from '$components/layout/main/contentSection/ContentAfterBigTextSection.svelte';
	import ContentSection from '$components/layout/main/contentSection/base/ContentSection.svelte';
	import HelloHeadsSection from '$components/layout/main/contentSection/helloHeads/HelloHeadsSection.svelte';
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
<ContentAfterBigTextSection>Formulaire</ContentAfterBigTextSection>

<style lang="scss">
</style>
