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

<div class="bg-base-300 absolute flex flex-col w-64 rounded-t-lg rounded-b overflow-hidden" 
    bind:this={DOMisland} use:draggable={{handle : ".handle-card", bounds : "parent", position, onDrag}}>
    <div class="handle-card flex gap-4 p-3 text-lg text-gray-100" style="background:#{regions[island.region].color}">
        <h3 class="flex-1 capitalize">{island.name}</h3>
        <div class="tooltip tooltip-left" data-tip="Add an item">
            <label for="cardModalProduction-{island.UUID}">
                <i class="fa-solid fa-square-plus"></i>
            </label>
        </div>
        <div class="tooltip tooltip-left" data-tip="Discard that island">
            <label for="cardModalDiscard-{island.UUID}">
                <i class="fa-regular fa-trash-can"></i>
            </label>
        </div>
    </div>
    <div class="flex flex-col">
        
    </div>
</div>