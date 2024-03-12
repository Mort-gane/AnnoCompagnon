<script>

    import IslandsDiscardModal from "$lib/Components/Islands/IslandsDiscardModal.svelte"
    import { islandsStore } from "$lib/Class/Islands.js";
    import IslandsAddPrestationModal from "./IslandsAddPrestationModal.svelte";

</script>

{#each $islandsStore as island (island.UUID)}
    <IslandsDiscardModal {island}/>
    <IslandsAddPrestationModal {island} />
{/each}