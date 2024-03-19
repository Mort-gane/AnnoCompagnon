<script>

    import Input from "$lib/Components/Grid/Input.svelte"
    import Grid from '$lib/Components/Grid/Grid.svelte';
    import QuickTools from "$lib/Components/Controls/QuickTools.svelte"
    import IslandsModalListings from '$lib/Components/Islands/IslandsModalListings.svelte';
    import ParametersModal from "$lib/Components/Controls/ParametersModal.svelte"

</script>

<div class="custom-drawer flex h-screen w-screen">
    <div class="flex-1 relative overflow-hidden bg-neutral">
        <Grid />
        <Input />
        <QuickTools />
    </div>
    <div class="w-64 shadow-inner">
        A
    </div>
    <IslandsModalListings />
    <ParametersModal />
</div>

<style>

</style>