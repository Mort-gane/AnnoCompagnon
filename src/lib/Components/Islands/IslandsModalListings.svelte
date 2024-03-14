<script>

    import IslandsDiscardModal from "$lib/Components/Islands/IslandsDiscardModal.svelte"
    import { islandsStore } from "$lib/Class/Islands.js";
    import IslandsAddItemsModal from "./ModalItems/IslandsAddItemsModal.svelte";

</script>

{#each $islandsStore as island (island.UUID)}
    <IslandsDiscardModal {island}/>
    <IslandsAddItemsModal {island} />
{/each}