<script>

    import Input from "$lib/Components/Grid/Input.svelte"
    import Grid from '$lib/Components/Grid/Grid.svelte';
    import QuickTools from "$lib/Components/Controls/QuickTools.svelte"
    import IslandsModalListings from '$lib/Components/Islands/IslandsModalListings.svelte';
    import ZoomTool from "$lib/Components/Controls/ZoomTool.svelte";

</script>

<div class="bg-neutral h-screen w-screen relative overflow-hidden"> 
    <Grid />
    <Input />
    <QuickTools />
    <IslandsModalListings />
</div>
