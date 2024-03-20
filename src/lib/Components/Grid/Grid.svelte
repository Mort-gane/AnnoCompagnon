<script context="module">

    import { writable } from 'svelte/store';
    export let gridPosition = writable({ x : 0, y : 0 })
    export let centerGrid = () => {
        gridPosition.set({
            x : (9000 / 2 - window.innerHeight / 2) * -1,
            y : (9000 / 2 - window.innerWidth / 2) * -1
        })
    }

</script>

<script>

    import { draggable } from '@neodrag/svelte';
    import { islandsStore } from "$lib/Class/Islands.js";
    import IslandsCard from '$lib/Components/Islands/IslandsCard.svelte';

    let onDrag = ({ offsetX, offsetY }) => {
        $gridPosition = { x: offsetX, y: offsetY };
    }

</script>

<div class="absolute border-2 border-info relative bg-grid" style="height: 9000px; width : 9000px;" 
    use:draggable={{ handle : ".handle", position : $gridPosition, onDrag }}>

    <grid class="absolute w-full h-full handle"></grid>
    {#each $islandsStore as island (island.UUID)}
        <IslandsCard {island} />
    {/each}
</div>