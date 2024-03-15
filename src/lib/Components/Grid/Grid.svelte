<script context="module">

    import { writable } from 'svelte/store';
    export let gridCanvasContexte = writable({})
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

    let canva
    onMount(() => {
        $gridCanvasContexte = canva.getContext('2d')

        // Define two points
        let point1 = { x: 50, y: 50 };
        let point2 = { x: 50, y: 150 };
        let point3 = { x: 200, y: 150 };

        // Draw line between two points
        $gridCanvasContexte.beginPath();
        $gridCanvasContexte.lineWidth = 4; // Set line width
        $gridCanvasContexte.moveTo(point1.x, point1.y); // Move to the starting point
        $gridCanvasContexte.lineTo(point2.x, point2.y); // Draw a line to the ending point
        $gridCanvasContexte.arcTo(point2.x, point2.y, point3.x, point3.y, 20)
        $gridCanvasContexte.lineTo(point3.x, point3.y)
        $gridCanvasContexte.stroke(); // Render the line

        //centerGrid() 
    })

</script>

<canvas bind:this={canva} use:draggable={{ position : $gridPosition }} class="absolute bg-grid" height="9000" width="9000"></canvas>
<div class="absolute border-2 border-info relative" style="height: 9000px; width : 9000px;" 
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
        background-image: linear-gradient(to right, rgba(140, 140, 140, 0.411) 1px, transparent 1px),linear-gradient(to bottom, rgba(140, 140, 140, 0.411) 1px, transparent 1px);
    }

</style>