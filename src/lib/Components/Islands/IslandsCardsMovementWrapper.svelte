<script>

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

<div class="bg-base-300 absolute flex flex-col w-fit rounded-t-lg rounded-b" bind:this={DOMisland} use:draggable={{handle : ".handle-card", bounds : "parent", position, onDrag}}>
    <slot />
</div>
