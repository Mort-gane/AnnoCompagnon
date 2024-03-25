<script>

    import Input from "$lib/Components/Grid/Input.svelte"
    import Grid from '$lib/Components/Grid/Grid.svelte';
    import QuickTools from "$lib/Components/Controls/QuickTools.svelte"
    import IslandsModalListings from '$lib/Components/Islands/IslandsModalListings.svelte';
    import RoadsSidePanel from "$lib/Components/Roads/RoadsSidePanel.svelte";
    import Toaster from "$lib/Components/Toast/Toaster.svelte";

</script>

<div class="custom-drawer flex h-screen w-screen flex-col">
    <RoadsSidePanel />
    <div class="flex-1 relative overflow-hidden bg-neutral">
        <Grid />
        <Input />
        <QuickTools />
    </div>
    <IslandsModalListings />
    <Toaster />
</div>

<style>

</style>