<script>

    import Input from "$lib/Components/Grid/Input.svelte"
    import Grid from '$lib/Components/Grid/Grid.svelte';
    import QuickTools from "$lib/Components/Controls/QuickTools.svelte"
    import IslandsModalListings from '$lib/Components/Islands/IslandsModalListings.svelte';
    import ParametersModal from "$lib/Components/Controls/ParametersModal.svelte"
    import RoadsSidePanel from "$lib/Components/Roads/RoadsSidePanel.svelte";

    import { parameters } from "$lib/Components/Controls/ParametersModal.svelte";

</script>

<div class:flex-col={["top","bottom"].includes($parameters?.display?.roadMenu || "")} class="custom-drawer flex h-screen w-screen">
    {#if ["left","top"].includes($parameters?.display?.roadMenu || "")}
        <RoadsSidePanel />
    {/if}
    <div class="flex-1 relative overflow-hidden bg-neutral">
        <Grid />
        <Input />
        <QuickTools />
        {#if $parameters?.display?.roadMenu === "floating"}
            <RoadsSidePanel />
        {/if}
    </div>
    {#if ["right","bottom"].includes($parameters?.display?.roadMenu || "") || !$parameters?.display?.roadMenu}
        <RoadsSidePanel />
    {/if}
    <IslandsModalListings />
    <ParametersModal />
</div>

<style>

</style>