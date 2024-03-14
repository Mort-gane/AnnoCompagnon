<script>

    import ModalItemsInput from "./ModalItemsInput.svelte";
    import ModalItemsListing from "./ModalItemsListing.svelte";

    export let island;
    let islandModalShow;

</script>

<input bind:checked={islandModalShow} type="checkbox" id="cardModalProduction-{island.UUID}" class="modal-toggle" />
{#if islandModalShow}
    <div class="modal" role="dialog">
        <div class="modal-box p-0">
            <h3 class="text-lg font-bold p-3">Ajouter une production sur : <span class="capitalize">{island.name}</span></h3>
            <ModalItemsListing {island} bind:islandModalShow />
            <ModalItemsInput {island} bind:islandModalShow />
        </div>
        <label class="modal-backdrop" for="cardModalProduction-{island.UUID}">Close</label>
    </div>
{/if}