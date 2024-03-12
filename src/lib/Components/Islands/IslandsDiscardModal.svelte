<script>

    import { islandsManager } from "$lib/Class/Islands.js";

    export let island;
    let islandModalShow;

</script>

<input bind:checked={islandModalShow} type="checkbox" id="cardModalDiscard-{island.UUID}" class="modal-toggle" />
{#if islandModalShow}
    <div class="modal" role="dialog">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Are you sure ?</h3>
            <p class="py-4">All of the productions and trades routes connections associated with that islands will be discarded, are you sure you want to prooceed ?</p>
            <div class="modal-action">
                <label for="cardModalDiscard-{island.UUID}" class="btn">Nop, take me back !</label>
                <label for="cardModalDiscard-{island.UUID}" class="btn btn-error" on:click={() => islandsManager.deleteUUID(island.UUID)}>
                    YES
                </label>
            </div>
        </div>
        <label class="modal-backdrop" for="cardModalDiscard-{island.UUID}">Close</label>
    </div>
{/if}