<script>

    import { registeredItemsNames } from "$lib/Class/Items.js";

    export let island;
    let islandModalShow;

    let addNewItem = (name = inputName) => {
        registeredItemsNames.update(n => [...[name],...n])
        island.addItemsToIslands(name)
        islandModalShow = false
        inputName = ""
    }

    let inputName = ""

</script>

<input bind:checked={islandModalShow} type="checkbox" id="cardModalProduction-{island.UUID}" class="modal-toggle" />
{#if islandModalShow}
    <div class="modal" role="dialog">
        <div class="modal-box p-0">
            <h3 class="text-lg font-bold p-3">Ajouter une production sur : <span class="capitalize">{island.name}</span></h3>
            <div class="h-64 flex flex-col overflow-y-auto">
                {#each $registeredItemsNames as registeredItemsName}
                    <button for="cardModalProduction-{island.UUID}" class="p-2 capitalize font-semibold bg-base-100 hover:bg-base-200 text-left" 
                        on:click={() => island.addItemsToIslands({registeredItemsName})} >
                            {registeredItemsName}
                    </button>
                {:else}
                    <span>When you'll have added some items you'll find them in here</span>
                {/each}
            </div>
            <div class="join w-full">
                <input class="input input-bordered join-item flex-1" placeholder="Bread"
                on:change={({ target }) => inputName = target.value} 
                on:keydown={e => {if(e.key === "Enter" && e.target.value) addNewItem(e.target.value)}} />
                <button disabled="{!inputName?'disabled':''}" class="btn join-item" 
                    on:click={addNewItem} >
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
        <label class="modal-backdrop" for="cardModalProduction-{island.UUID}">Close</label>
    </div>
{/if}