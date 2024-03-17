<script>

    import { registeredItemsNames } from "$lib/Class/Items.js";
    import { onMount } from "svelte"

    export let island
    export let islandModalShow

    let inputName
    let input
    onMount(()=>{
        inputName = ""
        input.focus()
    })

    let changeInputName = ({ target }) => inputName = target.value
    let addNewItem = () => {
        registeredItemsNames.update(n => [...[inputName],...n])
        island.addItemsToIslands(inputName)
        islandModalShow = false
        inputName = ""
    }
    let isEnterOrEscape = ({ key, target }) => { 
        if( key === "Enter" && target.value ) {
            inputName = target.value
            addNewItem()
        } else if ( key === "Escape" ) {
            islandModalShow = false
        }
    }



</script>

<div class="join w-full rounded-t-none">
    <input bind:this={input} on:keyup={changeInputName} on:keydown={isEnterOrEscape} class="input input-bordered join-item flex-1" placeholder="Bread" />
    <button on:click={addNewItem} disabled="{!inputName?'disabled':''}"  class="btn join-item"  >
        <i class="fa-solid fa-plus"></i>
    </button>
</div>