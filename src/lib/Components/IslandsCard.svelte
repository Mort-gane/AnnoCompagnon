<script>

    import { regions } from "$lib/Class/Islands.js";
    import { draggable } from "@neodrag/svelte";

    export let island
    let islandModalShow

</script>

<div class="bg-base-300 absolute flex flex-col min-w-64 rounded-t-lg rounded-b overflow-hidden" use:draggable={{handle : ".handle-card"}}>
    <div class="handle-card p-3 text-lg capitalize text-gray-100" style="background:#{regions[island.region].color}">
        {island.name}
    </div>
    <div class="grid">
        
    </div>
    <div class="join p-2 w-full">
        <button class="btn join-item btn-sm btn-outline flex-1">Add a production</button>
        <label for="cardModal-{island.UUID}" class="btn join-item btn-sm btn-error btn-outline">Discard</label>
    </div>
</div>