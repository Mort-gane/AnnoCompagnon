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
    import { onMount } from 'svelte';

    let onDrag = ({ offsetX, offsetY }) => {
        $gridPosition = { x: offsetX, y: offsetY };
    }

    onMount(() => { centerGrid() })

</script>

<div class="absolute bg-grid relative" style="height: 9000px; width : 9000px;" 
    use:draggable={{ handle : ".handle", position : $gridPosition, onDrag }}>
    <div class="absolute w-full h-full handle"></div>
    {#each $islandsStore as island (island.UUID)}
        <IslandsCard {island} />
    {/each}
</div>
<div>
    
</div>

<style>

    .bg-grid {
        background-size: 20px 20px;
        background-image: linear-gradient(to right, rgb(140, 140, 140) 1px, transparent 1px),linear-gradient(to bottom, rgb(140, 140, 140) 1px, transparent 1px);
    }

</style>