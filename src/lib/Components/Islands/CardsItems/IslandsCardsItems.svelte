<script>

    export let delItem
    export let item //The item passed by the card
    export let hideEditButton = false

    let production = item.production
    let consumtion = item.consumtion
    let consumtionTT = item.consumtionTT
    let name = item.name
    
</script>

<label class="w-full shadow-sm flex gap-2 py-1 px-2 cursor-pointer hide-edit" for={item.UUID}>
    <span class="flex-1">{$name}</span>
    <span class="">
        {$production>$consumtionTT?'+':''}{$production-$consumtionTT}t/u
    </span>
    {#if !hideEditButton}
        <span class="hided-edit">
            <i class="fa-solid fa-cogs"></i>
        </span>
    {/if}
</label>
<div class="flex h-2">
    {#if $production && $production>=$consumtionTT}
        <div style="width : {$consumtion*100/$production}%" class="bg-blue-500 h-full"></div>
        <div class="bg-green-600 h-full flex-1"></div>
    {:else if $production || $consumtionTT}
        <div style="width : {$production*100/$consumtionTT}%" class="bg-amber-400 h-full"></div>
        <div class="bg-red-700 h-full flex-1"></div>
    {:else}
        <div class="bg-gray-500 h-full flex-1"></div>
    {/if}
</div>

<style>

    .hide-edit .hided-edit {
        display: none;
    }

    .hide-edit:hover .hided-edit {
        display: block;
    }

</style>
