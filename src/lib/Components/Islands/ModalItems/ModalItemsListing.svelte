<script>

    import { registeredItemsNames } from "$lib/Class/Items.js";
    export let island
    export let islandModalShow

</script>

<div class="h-64 flex flex-col overflow-y-auto bg-base-300">
    {#each $registeredItemsNames as registeredItemsName}
        <button class="p-2 capitalize font-semibold shadow bg-base-200 hover:bg-base-100 text-left" 
            on:click={() => { island.addItemsToIslands(registeredItemsName); islandModalShow = false }} >
                {registeredItemsName}
        </button>
    {:else}
        <div class="flex flex-col justify-center items-center flex-1 text-secondary">
            <span>When you'll have added some items you'll find them in here</span>
        </div>
    {/each}
</div>