<script>

    import { registeredItemsNames } from "$lib/Class/Items.js";
    export let island
    export let islandModalShow
    //We get the store
    let items = island.items

</script>

<div class="h-64 flex flex-col overflow-y-auto bg-base-300">
    {#each $registeredItemsNames as registeredItemsName}
        <button class="p-2 shadow text-left flex gap-4 {$items.some(({_name}) => _name === registeredItemsName) ? 'bg-base-300 cursor-not-allowed' : 'bg-base-200 hover:bg-base-100'}"
            on:click={() => { island.addItemsToIslands(registeredItemsName); islandModalShow = false }} 
            disabled="{$items.some(({_name}) => _name === registeredItemsName) ? 'disabled' : ''}">
                <span class="capitalize font-semibold">{registeredItemsName}</span>
            {#if $items.some(({_name}) => _name === registeredItemsName)}
                <span>
                    <i class="fa-regular fa-circle-check text-success"></i>
                    <span class="text-sm italic text-success">Already on that island</span>
                </span>
            {/if}
        </button>
    {:else}
        <div class="flex flex-col justify-center items-center flex-1 text-secondary">
            <span>When you'll have added some items you'll find them in here</span>
        </div>
    {/each}
</div>