<script>

    import { regions, islandsManager } from "$lib/Class/Islands.js";
    import { gridPosition } from "$lib/Components/Grid/Grid.svelte"

    let newIslandName = ""
    let selectedRegion
    let addIsland = () => { 
        let newIsland = islandsManager.addAsIsland(newIslandName,selectedRegion)
        newIsland.x = $gridPosition.x * -1 + window.innerWidth / 3
        newIsland.y = $gridPosition.y * -1 + window.innerHeight / 3
        newIslandName = ""
    }
    let isEnter = (e) => {if (e.key === "Enter" && newIslandName) addIsland()}

</script>

<div class="fixed bottom-1 flex justify-center right-0 left-0 gap-2 opacity-80 hover:opacity-100">
    <select class="select w-32" bind:value={selectedRegion}>
        {#each Object.keys(regions) as regionKey (regionKey)}
            <option value="{regionKey}">{regions[regionKey].name}</option>
        {/each}
    </select>
    <label type="text" class="input input-bordered flex items-center gap-2">
        <input bind:value={newIslandName} on:keypress={isEnter} type="text" class="grow" placeholder="New island name..." />
        {#if newIslandName}
            <button class="kbd kbd-sm" on:click={addIsland}>+</button>
        {/if}
    </label>
</div>