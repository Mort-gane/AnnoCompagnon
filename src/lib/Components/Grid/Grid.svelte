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
    import RadioBinder from '../Islands/CardsItems/RadioBinder.svelte';

    let onDrag = ({ offsetX, offsetY }) => {
        $gridPosition = { x: offsetX, y: offsetY };
    }

</script>


<div use:draggable={{ position : $gridPosition }} class="absolute bg-grid" style="height: 9000px; width : 9000px;" >
    <RadioBinder />
</div>
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