<script>

    import { fly } from "svelte/transition";
    export let delItem
    export let color
    export let item
    let name = item.name
    let production = item.production
    let consumtion = item.consumtion
    
    let changeProduction = ({target}) => {
        if (target.value < 0)
            target.value = 0
        if (target.value || target.value === "0") {
            $production = Number(target.value)
        }
    }

    let changeConsumtion = ({target}) => {
        if (target.value < 0)
            target.value = 0
        if (target.value || target.value === "0") {
            $consumtion = Number(target.value)
        }
    }

    let checked

</script>

<input type="checkbox" bind:checked id={item.UUID} hidden/>
{#if checked}
    <div class="flex flex-col rounded-t-lg rounded-b h-fit overflow-hidden w-32" transition:fly={{ duration : 1000, x : -200 }}>
        <div class="px-2 py-1 flex gap-1 text-white" style="background:#{color}">
            <div class="flex-1">
                <input class="bg-transparent w-full" placeholder="No name" bind:value={$name} />
            </div>
            <label for="{item.UUID}" class="cursor-pointer">
                <i class="fa-solid fa-times"></i>
            </label>
        </div>
        <div class="flex flex-col bg-base-300 p-1">
            <label class="input input-bordered input-sm flex items-center gap-2">
                <i class="fa-solid fa-carrot text-lg"></i>
                <div class="flex-1">
                    <input type="number" class="w-full" value={$production} on:change={changeProduction} />
                </div>
            </label>
            <label class="input input-bordered input-sm flex items-center gap-2">
                <i class="fa-solid fa-utensils text-lg"></i>
                <div class="flex-1">
                    <input type="number" class="w-full" value={$consumtion} on:change={changeConsumtion} />
                </div>
            </label>
            <div class="flex gap-1 w-full">
                <button class="btn color-btn btn-xs flex-1" style="--color : #{color}">
                    <i class="fa-solid fa-route"></i>
                    <div class="badge badge-info badge-xs">
                        44
                    </div>
                </button>
                <button class="btn btn-error btn-xs btn-outline w-8">
                    <i class="fa-solid fa-broom"></i>
                </button>
            </div>
        </div>
        <div class="p-1" style="background:#{color}">
            <button class="btn btn-error btn-sm w-full" on:click={delItem}>
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </div>
{/if}

<style>

    input:focus-visible.bg-transparent {
        outline: none;
    }

</style>