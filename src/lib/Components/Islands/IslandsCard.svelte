<script>

    import IslandsCardsItems from "./CardsItems/IslandsCardsItems.svelte";
    import IslandsCardItemsMenu from "./CardsItems/IslandsCardItemsMenu.svelte";
    import { regions } from "$lib/Class/Islands.js"; //Used for the card color
    import { draggable } from "@neodrag/svelte"; //Used to move around the card
    import { onMount } from "svelte"; //Used for changing the place of the card
    import { fly } from "svelte/transition"; //Used for the side menu

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
    let checkedCard
    let openSideMenu

</script>

<input type="radio" name="card" id="{UUID}" hidden/>
<div class="absolute" bind:this={DOMisland} use:draggable={draggablePayload}>
    <label class="flex gap-2" for="{UUID}">
        <div class="w-52 h-fit flex flex-col overflow-hidden rounded-t-lg rounded-b ring-cyan-600 z-10">
            <div class="handle-card flex gap-1 py-1 px-2 text-gray-100 items-center" style="background:#{color}">
                <div class="font-semibold flex-1">
                    <input class="bg-transparent w-full" placeholder="No name" bind:value={island.name} />
                </div>
                <label class="btn btn-sm btn-ghost">
                    <input type="checkbox" bind:checked={openSideMenu} id="sideMenu-{UUID}" hidden/>
                    <i class="fa-solid fa-ellipsis"></i>
                </label>
            </div>
            <div class="flex flex-col bg-base-300 min-h-4">
                {#each $items as item (item.UUID)}
                    <IslandsCardsItems {item} />
                {/each}
                <label class="btn btn-xs m-1 color-btn capitalize normal-case" style="--color : #{color}" for="cardModalProduction-{UUID}">
                    Add an item
                </label>
            </div>
            <div class="handle-card h-2" style="background:#{color}"></div>
        </div>
        {#if openSideMenu}
            <div class="join join-vertical h-fit" transition:fly={{ duration : 500, x : -50 }}>
                <label class="btn join-item btn-sm" for="sideMenu-{UUID}">
                    <i class="fa-solid fa-times"></i>
                </label>
                <div class="tooltip tooltip-right tooltip-info" data-tip="Discard that island">
                    <label class="btn join-item btn-sm btn-error" for="cardModalDiscard-{UUID}">
                        <i class="fa-regular fa-trash-can"></i>
                    </label>
                </div>
            </div>
        {/if}
        {#each $items as item(item.UUID)}
            {@const delItem = () => $items = $items.filter(n=>n.UUID!==item.UUID)}
            <IslandsCardItemsMenu {item} {delItem} {color} />
        {/each}
    </label>
</div>

<style>

    input:focus-visible.bg-transparent {
        outline: none;
    }

    input[name="card"]:checked + div .ring-cyan-600 {
        box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    }

</style>
