import { writable } from "svelte/store";
import { default as _regions } from "../DB/RegionsDB.json"
import { v4 } from "uuid";
import { Items } from "./Items.js";
import { addToast, alertTypeEnum } from "$lib/Components/Toast/Toaster.svelte";

export let regions = _regions

export class Islands {

    constructor (name,region) {

        this.UUID = v4()
        this.name = name //Feed from Inputs
        this.region = region //Feed from Inputs
        this.x = 0 //Feed from viewpoints view
        this.y = 0 //Feed from viewpoints view
        this.items = writable([])

    }

    addItemsToIslands(name) {
        this.items.update(n => {
            if(!n.some((item) => item._name.toLowerCase() === name.toLowerCase())) {
                addToast(`[${name}] have been added to [${this.name}]`,alertTypeEnum.success)
                return [...n,...[new Items(name)]]
            } else {
                addToast(`You already added [${name}] to [${this.name}]`,alertTypeEnum.error)
                return n
            }})
    }

}

let { subscribe, update, set } = writable([])

export class IslandsManager {

    addAsIsland(name,region) {
        let newIsland = new Islands(name,region)
        addToast(`Your island was created`,alertTypeEnum.success)
        update(n=>[...n,...[newIsland]])
        return newIsland
    }

    deleteUUID(UUID) {
        update(n=>n.filter(n => n.UUID !== UUID))
    }

}

export let islandsStore = { subscribe } //Only readable all state management should be done
export let islandsManager = new IslandsManager()