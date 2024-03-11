<script>

    import IslandsDiscardModal from "$lib/Components/Islands/IslandsDiscardModal.svelte"
    import { islandsStore } from "$lib/Class/Islands.js";

</script>

{#each $islandsStore as island (island.UUID)}
    <IslandsDiscardModal {island}/>
{/each}