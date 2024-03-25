<script>

    import IslandsCardsItems from "./CardsItems/IslandsCardsItems.svelte";
    import IslandsCardItemsMenu from "./CardsItems/IslandsCardItemsMenu.svelte";
    import { regions } from "$lib/Class/Islands.js"; //Used for the card color
    import { draggable } from "@neodrag/svelte"; //Used to move around the card
    import { onMount } from "svelte"; //Used for changing the place of the card

    export let island
    //Var I need later on
    let items = island.items //Items is a store so it to be at the root of a var obj
    let UUID = island.UUID
    let color = `${regions[island.region].color}` //because its pretty
    let position = { //Parse the positon + needed for my payload
        x : island.x > 0 ? island.x : 0 , 
        y : island.y > 0 ? island.y : 0 
    }
    let draggablePayload = { //Payload for @neodrag.js
        handle : ".handle-card", //Avoid coliding with other draggable options
        bounds : "parent", //Cant go outside of the initial grid
        position, //Insert the postion object
        onDrag : ({ offsetX, offsetY }) => {       //Just updating the Dom
            position = { x: offsetX, y: offsetY }; //position in the island store
            island = {...island,...position}
        }
    }
    let DOMisland //To save the dom element
    onMount(() => { //Bound the card to the grid limits if needed on startup
        if (DOMisland.clientWidth + position.x > 9000)
            position = {...position,...{ x : 9000 - DOMisland.clientWidth - 1 }}
        if (DOMisland.clientHeight + position.y > 9000)
            position = {...position,...{ y : 9000 - DOMisland.clientHeight - 1 }}
        //Take the focus on the element on startup
        DOMisland.focus()
    })
    //
    let checked = true
</script>

<div class="absolute" bind:this={DOMisland} use:draggable={draggablePayload}>
    <div class="flex gap-2">
        <div class="w-52 h-fit flex flex-col overflow-hidden rounded-t-lg rounded-b">
            <div class="handle-card flex gap-2 py-1 px-2 text-gray-100 items-center" style="background:#{color}">
                <label class="swap swap-rotate">
                    <input type="checkbox" bind:checked/>
                    <i class="swap-off fa-solid fa-circle-chevron-down"></i>
                    <i class="swap-on fa-solid fa-circle-chevron-up"></i>
                </label>
                <div class="font-semibold flex-1">
                    <input class="bg-transparent w-full" placeholder="No name" bind:value={island.name} />
                </div>
                <div class="tooltip tooltip-left tooltip-info" data-tip="Discard that island">
                    <label class="btn btn-sm btn-ghost" for="cardModalDiscard-{UUID}">
                        <i class="fa-regular fa-trash-can"></i>
                    </label>
                </div>
            </div>
            {#if checked}
            <div class="flex flex-col bg-base-300 min-h-4">
                {#each $items as item (item.UUID)}
                    {@const delItem = () => $items = $items.filter(n=>n.UUID!==item.UUID)}
                    <IslandsCardsItems {delItem} {item}/>
                {/each}
                <label class="btn btn-xs m-1 color-btn capitalize normal-case" style="--color : #{color}" for="cardModalProduction-{UUID}">
                    Add an item
                </label>
            </div>
            {/if}
            <div class="handle-card h-2" style="background:#{color}"></div>
        </div>
        <div class="grid grid-cols-3 gap-1">
            {#each $items as item(item.UUID)}
                <IslandsCardItemsMenu {item} {color} />
            {/each}
        </div>
    </div>
</div>

<style>

    input:focus-visible.bg-transparent {
        outline: none;
    }

</style>
