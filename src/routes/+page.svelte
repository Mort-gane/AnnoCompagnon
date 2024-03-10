<script>

    import { draggable } from '@neodrag/svelte';
    import { islandsManager, islandsStore, regions } from "$lib/Class/Islands.js";
    import IslandsCard from '$lib/Components/IslandsCard.svelte';
    import IslandDiscardModal from "$lib/Components/IslandDiscardModal.svelte"

    let newIslandName = ""
    let selectedRegion
    let addIsland = () => { 
        islandsManager.addAsIsland(newIslandName,selectedRegion)
        newIslandName = ""
    }

</script>

<div class="bg-neutral h-screen w-screen relative overflow-hidden"> 
    <div class="absolute bg-grid relative" style="height: 9000px; width : 9000px;" use:draggable={{ handle : ".handle" }}>
        <div class="absolute w-full h-full handle"></div>
        <div>
            {#each $islandsStore as island (island.UUID)}
                <IslandsCard {island} />
            {/each}
        </div>
    </div>
    <div class="fixed bottom-1 flex justify-center right-0 left-0 gap-2">
        <select class="select w-32" bind:value={selectedRegion}>
            {#each Object.keys(regions) as regionKey (regionKey)}
                <option value="{regionKey}">{regions[regionKey].name}</option>
            {/each}
        </select>
        <label type="text" class="input input-bordered flex items-center gap-2">
            <input bind:value={newIslandName} type="text" class="grow" placeholder="Search" />
            {#if newIslandName}
                <kbd class="kbd kbd-sm" on:click={addIsland}>+</kbd>
            {/if}
        </label>
    </div>
    {#each $islandsStore as island (island.UUID)}
        <IslandDiscardModal {island}/>
    {/each}
</div>

<style>

    .bg-grid {
        background-size: 20px 20px;
        background-image: linear-gradient(to right, rgb(140, 140, 140) 1px, transparent 1px),linear-gradient(to bottom, rgb(140, 140, 140) 1px, transparent 1px);
    }

</style>