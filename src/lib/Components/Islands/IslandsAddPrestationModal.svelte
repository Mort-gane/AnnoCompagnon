<script>

    import { registeredProductionNames } from "$lib/Class/Production.js";

    export let island;
    let islandModalShow;

    let addProduction = (name) => {

    }

</script>

<input bind:checked={islandModalShow} type="checkbox" id="cardModalProduction-{island.UUID}" class="modal-toggle" />
{#if islandModalShow}
    <div class="modal" role="dialog">
        <div class="modal-box p-0">
            <h3 class="text-lg font-bold p-3">Ajouter une production sur : <span class="capitalize">{island.name}</span></h3>
            <div class="h-64 flex flex-col overflow-y-scroll">
                {#each $registeredProductionNames as registeredProductionName}
                    <button class="p-2 capitalize font-semibold bg-base-100 hover:bg-base-200" on:click={() => addProduction(registeredProductionName)} >
                        {registeredProductionName}
                    </button>
                {/each}
            </div>
        </div>
        <label class="modal-backdrop" for="cardModalProduction-{island.UUID}">Close</label>
    </div>
{/if}