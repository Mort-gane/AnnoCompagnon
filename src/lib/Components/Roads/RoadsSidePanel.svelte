<script>

    import RoadCards from "../Islands/RoadCards/RoadCards.svelte";

    export let checked = true
    export let openedRoad = "1"


</script>

<div class="bg-neutral shadow flex flex-col border-b-2 border-info">
    <div class="bg-info text-info-content p-2 flex items-center text-lg gap-3">
        <label class="swap swap-rotate">
            <input type="checkbox" bind:checked/>
            <i class="swap-off fa-solid fa-chevron-down"></i>
            <i class="swap-on fa-solid fa-chevron-up"></i>
        </label>
        <h3>Trade routes & Items</h3>
    </div>
    {#if checked}
        <div class="h-12 overflow-x-scroll bg-neutral flex">
            <div role="tablist" class="tabs tabs-boxed tabs-sm flex-1 whitespace-nowrap flex">
                <label class="tab" class:tab-active={openedRoad === "test1"}>
                    Tab 1
                    <input bind:group={openedRoad} value="test1" type="radio" hidden checked/>
                    <i class="fa-solid fa-xmark"></i>
                </label>
                <label class="tab">
                    Tab 2
                    <input bind:group={openedRoad} value="test2" type="radio" hidden/>
                    <i class="fa-solid fa-xmark"></i>
                </label>
                <label class="tab">
                    Tab 3
                    <input bind:group={openedRoad} value="test3" type="radio" hidden/>
                    <i class="fa-solid fa-xmark"></i>
                </label>
                <div class="flex-1"></div>
                <button class="tab">
                    <i class="fa-solid fa-square-plus"></i>
                </button>
            </div>
        </div>
        {#if openedRoad}
            <div class="p-1 bg-base-200 rounded">
                <input class="bg-transparent border-none" />
            </div>
            <div class="h-80 bg-grid overflow-x-scroll grid grid-rows-3 grid-cols-3">
                <RoadCards />
            </div>
        {/if}
    {/if}
</div>

<style>

    .tab {
        flex-wrap: nowrap;
        gap: 0.5em;
    }

    input:focus-visible.bg-transparent {
        outline: none;
    }

</style>
