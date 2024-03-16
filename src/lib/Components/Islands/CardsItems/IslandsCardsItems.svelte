<script>

    import { regions } from "$lib/Class/Islands.js";
    import { onDestroy, onMount } from "svelte";

    import { radioNodeIds, currentLinkNodeString } from "./RadioBinder.svelte";

    export let item
    export let delItem
    export let region
    export let UUID

    let checked = true
    let changeProduction = ({target}) => {
        if (target.value < 0)
            target.value = 0
        if (target.value || target.value === "0") {
            item.production = Number(target.value)
        }
    }

    let consumtionTT = 0
    let changeConsumtion = ({target}) => {
        if (target.value < 0)
            target.value = 0
        if (target.value || target.value === "0") {
            item.consumtion = Number(target.value)
            consumtionTT = Number(target.value)
        }
    }

    let leftNodeId = `${UUID}-${item.UUID}-left`
    let rightNodeId = `${UUID}-${item.UUID}-right`

    onMount(() => {
        $radioNodeIds = [...$radioNodeIds,...[leftNodeId,rightNodeId]]
    })
    onDestroy(() => {
        $radioNodeIds = $radioNodeIds.filter(n=>[leftNodeId,rightNodeId].includes(n))
    })
    
</script>

<div class="shadow-sm relative">
    <div class="flex items-center bg-base-100 hover:bg-base-300 h-10">
        <label class="swap swap-rotate p-2">
            <input type="checkbox" bind:checked id="{UUID}-{item.UUID}"/>
            <i class="swap-off fa-solid fa-circle-chevron-down"></i>
            <i class="swap-on fa-solid fa-circle-chevron-up"></i>
        </label>
        <label class="flex items-center h-full" for="{UUID}-{item.UUID}">
            <span class="capitalize w-32 py-2">{item.name}</span>
            <div class="relative flex items-center h-full" style="width : 200px">
                {#if item.production && item.production>=consumtionTT}
                    <div style="width : {item.consumtion*200/item.production}px" class="bg-blue-500 h-full"></div>
                    <div class="bg-green-600 h-full flex-1"></div>
                {:else if item.production || consumtionTT}
                    <div style="width : {item.production*200/consumtionTT}px" class="bg-orange-600 h-full"></div>
                    <div class="bg-red-600 h-full flex-1"></div>
                {/if}
                <span class="absolute right-2">
                    {consumtionTT>item.production?'':'+'}{item.production-consumtionTT}t/u
                </span>
            </div>
        </label>
    </div>
    <div id="node-{leftNodeId}" style="visibility: hidden;" class="absolute left-link btn btn-circle btn-xs"></div>
    <div id="node-{rightNodeId}" style="visibility: hidden;" class="absolute right-link btn btn-circle btn-xs"></div>
    {#if !$currentLinkNodeString}
        <label for="{leftNodeId}" id="label-{leftNodeId}" class="absolute left-link btn btn-circle btn-ghost btn-xs">
            <i class="fa-solid fa-plus-circle"></i>
        </label>
        <label for="{rightNodeId}" id="label-{rightNodeId}" class="absolute right-link btn btn-circle btn-ghost btn-xs">
            <i class="fa-solid fa-plus-circle"></i>
        </label>
    {:else if $currentLinkNodeString.startsWith(`${UUID}`)}
        {#if !$currentLinkNodeString.startsWith(`${UUID}-${item.UUID}`)}
            <!---->
        {:else if $currentLinkNodeString.endsWith("left")}
            <label for="voidNode" class="absolute left-link btn-xs btn btn-circle btn-outline btn-error mr-2">
                <i class="fa-solid fa-minus"></i>
            </label>
        {:else if $currentLinkNodeString.endsWith("right")}
            <label for="voidNode" class="absolute right-link btn-xs btn btn-circle btn-outline btn-error">
                <i class="fa-solid fa-minus"></i>
            </label>
        {/if}
    {:else}
        <label for="end-{leftNodeId}" id="label-{leftNodeId}" class="absolute left-link btn btn-circle btn-outline btn-success btn-xs">
            <i class="fa-solid fa-plus-circle"></i>
        </label>
        <label for="end-{rightNodeId}" id="label-{rightNodeId}" class="absolute right-link btn btn-circle btn-outline btn-success btn-xs">
            <i class="fa-solid fa-plus-circle"></i>
        </label>
    {/if}
</div>
{#if checked}
<div class="flex p-1 justify-between" style="background-color: #{regions[region].sub_color};">
    <label>
        <i class="text-gray-200 fa-regular fa-square-plus"></i>
        <input value="{item.production}" on:change={changeProduction} type="number" class="input input-bordered input-sm w-16" />
    </label>
    <label>
        <i class="text-gray-200 fa-regular fa-square-minus"></i>
        <input value="{item.consumtion}" on:change={changeConsumtion} type="number" class="input input-bordered input-sm w-16" />
    </label>
    <label>
        <i class="text-gray-200 fa-solid fa-ship"></i>
        <input type="number" class="input input-bordered input-sm w-16" disabled/> 
    </label>
    <button on:click={delItem} class="btn btn-sm">
        <i class="fa-regular fa-trash-can"></i>
    </button>
</div>
{/if}

<style>

.left-link {
    left: -28px;
    top : 8px;
}

.right-link {
    right: -28px;
    top : 8px;
}

</style>