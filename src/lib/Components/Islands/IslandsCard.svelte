<script>

    import IslandsCardsItems from "./CardsItems/IslandsCardsItems.svelte"

    import { regions } from "$lib/Class/Islands.js";
    import { draggable } from "@neodrag/svelte";
    import { onMount } from "svelte";
    import { clearLines, redrawLines } from "./CardsItems/RadioBinder.svelte";

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

    let onDragEnd = () => $redrawLines(island.UUID)

    let items = island.items

</script>

<div class="bg-base-300 absolute flex flex-col w-fit rounded-t-lg rounded-b" 
    bind:this={DOMisland} use:draggable={{handle : ".handle-card", bounds : "parent", position, onDrag, onDragEnd}}>
    <div class="handle-card min-w-48 flex gap-4 p-3 text-lg text-gray-100 shadow rounded-t-lg" style="background:#{regions[island.region].color}">
        <h3 class="flex-1 capitalize">{island.name}</h3>
        <div class="tooltip tooltip-left tooltip-info" data-tip="Add an item">
            <label for="cardModalProduction-{island.UUID}">
                <i class="fa-solid fa-square-plus"></i>
            </label>
        </div>
        <div class="tooltip tooltip-left tooltip-info" data-tip="Discard that island">
            <label for="cardModalDiscard-{island.UUID}">
                <i class="fa-regular fa-trash-can"></i>
            </label>
        </div>
    </div>
    <div class="flex flex-col bg-base-300">
        {#each $items as item (item.UUID)}
            {@const delItem = () => {
                $items = $items.filter(n=>n.UUID!==item.UUID)
                clearLines(`${island.UUID}-${item.UUID}`)
            }}
            <IslandsCardsItems {item} {...island} {delItem} />
        {:else}
            <span class="p-2">This island doesnt have production yet</span>
        {/each}
    </div>
    <div class="h-4 rounded-b" style="background:#{regions[island.region].color}"></div>
</div>
