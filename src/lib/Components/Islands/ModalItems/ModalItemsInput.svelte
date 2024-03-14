<script>

    import { registeredItemsNames } from "$lib/Class/Items.js";
    import { writable } from "svelte/store";

    export let island

    export let islandModalShow

    let inputName = ""
    let changeInputName = ({ target }) => inputName = target.value
    let addNewItem = () => {
        registeredItemsNames.update(n => [...[inputName],...n])
        island.addItemsToIslands(inputName)
        islandModalShow = false
        inputName = ""
    }
    let isEnter = ({ key, target }) => { 
        if( key === "Enter" && target.value ) {
            inputName = target.value
            addNewItem()
        }
    }

</script>

<div class="join w-full rounded-t-none">
    <input on:keyup={changeInputName} on:keydown={isEnter} class="input input-bordered join-item flex-1" placeholder="Bread" />
    <button on:click={addNewItem} disabled="{!inputName?'disabled':''}"  class="btn join-item"  >
        <i class="fa-solid fa-plus"></i>
    </button>
</div>