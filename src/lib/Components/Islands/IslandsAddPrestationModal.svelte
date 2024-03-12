<script>

    export let island;
    let islandModalShow;

</script>

<input bind:checked={islandModalShow} type="checkbox" id="cardModalProduction-{island.UUID}" class="modal-toggle" />
{#if islandModalShow}
    <div class="modal" role="dialog">
        <div class="modal-box">
            <h3 class="text-lg font-bold">Ajouter une production sur : {island.name}</h3>        
        </div>
        <label class="modal-backdrop" for="cardModalProduction-{island.UUID}">Close</label>
    </div>
{/if}