<script>

    import { regions } from "$lib/Class/Islands.js";

    export let item
    export let items
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


</script>

<div class="shadow-sm flex items-center bg-base-100 hover:bg-base-300 h-10">
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
            {:else if item.production}
                <div style="width : {item.production*200/consumtionTT}px" class="bg-orange-600 h-full"></div>
                <div class="bg-red-600 h-full flex-1"></div>
            {/if}
            <span class="absolute right-2">
                {consumtionTT>item.production?'':'+'}{item.production-consumtionTT}t/u
            </span>
        </div>
    </label>
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
    <button on:click={()=>$items=$items.filter(n=>n.UUID!==item.UUID)} class="btn btn-sm">
        <i class="fa-regular fa-trash-can"></i>
    </button>
</div>
{/if}

