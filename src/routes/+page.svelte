<script>
	import BigTextSection from '$components/layout/main/contentSection/BigTextSection.svelte';
	import ContentAfterBigTextSection from '$components/layout/main/contentSection/ContentAfterBigTextSection.svelte';
	import ContentSection from '$components/layout/main/contentSection/base/ContentSection.svelte';
	import HelloHeadsSection from '$components/layout/main/contentSection/helloHeads/HelloHeadsSection.svelte';
</script>

<HelloHeadsSection />

<BigTextSection>Je m'appelle</BigTextSection>
<ContentAfterBigTextSection>Matthias Guillitte</ContentAfterBigTextSection>
<BigTextSection>Et je fais des trucs...</BigTextSection>
<ContentAfterBigTextSection>Mes travaux</ContentAfterBigTextSection>
<BigTextSection>Vous voulez me contacter ?</BigTextSection>
<ContentAfterBigTextSection>Formulaire</ContentAfterBigTextSection>

<style lang="scss">
</style>
