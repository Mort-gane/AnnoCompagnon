<script>

    import IslandsCardsControls from "./IslandsCardsControls.svelte";
    import IslandsCardsMovementWrapper from "./IslandsCardsMovementWrapper.svelte";
    import IslandsCardsItems from "./IslandsCardsItems.svelte"

    import { regions } from "$lib/Class/Islands.js";
    
    export let island
    let items = island.items

</script>

<IslandsCardsMovementWrapper {island}>
    <div class="handle-card min-w-48 flex gap-4 p-3 text-lg text-gray-100 shadow" style="background:#{regions[island.region].color}">
        <h3 class="flex-1 capitalize">{island.name}</h3>
        <IslandsCardsControls {...island} />
    </div>
    <div class="flex flex-col bg-base-300">
        {#each $items as item (item.UUID)}
            <IslandsCardsItems {item} {...island} />
        {/each}
    </div>
</IslandsCardsMovementWrapper>
