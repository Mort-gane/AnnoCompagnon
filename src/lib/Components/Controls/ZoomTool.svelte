<script context="module">

    import { writable } from "svelte/store";
    export let zoomLevel = writable(100)

</script>

<div class="fixed bottom-2 right-2 bg-base-300 rounded p-1 opacity-80 hover:opacity-100">
    <input type="range" min="0" max="100" bind:value={$zoomLevel} class="range h-36 w-fit bg-base-content" step="20" orient="vertical" />
</div>

<style>

    .range[type=range][orient=vertical] {
        appearance: slider-vertical;
        --range-shdw : none;
    }

</style>