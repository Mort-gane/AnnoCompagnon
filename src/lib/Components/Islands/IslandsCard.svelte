<script>

    import { regions } from "$lib/Class/Islands.js";
    import { draggable } from "@neodrag/svelte";
    import { onMount } from "svelte";

    export let island
    let position = { 
        x : island.x > 0 ? island.x : 0 , 
        y : island.y > 0 ? island.y : 0 
    }
    let max = { x : 9000, y : 9000 }

    let DOMisland
    onMount(() => {
        if (DOMisland.clientWidth + position.x > max.x)
            position = {...position,...{ x : max.x - DOMisland.clientWidth - 1 }}
        if (DOMisland.clientHeight + position.y > max.y)
            position = {...position,...{ y : max.y - DOMisland.clientHeight - 1 }}
    })

    let onDrag = ({ offsetX, offsetY }) => {
        position = { x: offsetX, y: offsetY };
        island = {...island,...position}
    }

</script>

<div class="bg-base-300 absolute flex flex-col min-w-64 rounded-t-lg rounded-b overflow-hidden" 
    bind:this={DOMisland} use:draggable={{handle : ".handle-card", bounds : "parent", position, onDrag}}>
    <div class="handle-card p-3 text-lg capitalize text-gray-100" style="background:#{regions[island.region].color}">
        {island.name},{position.x},{position.y}
    </div>
    <div class="grid">
        
    </div>
    <div class="join p-2 w-full">
        <button class="btn join-item btn-sm btn-outline flex-1">Add a production</button>
        <label for="cardModal-{island.UUID}" class="btn join-item btn-sm btn-error btn-outline">Discard</label>
    </div>
</div>