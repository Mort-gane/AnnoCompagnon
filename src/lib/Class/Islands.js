import { writable } from "svelte/store";
import { default as _regions } from "../DB/RegionsDB.json"
import { v4 } from "uuid";

export let regions = _regions
console.log(regions)

export class Islands {

    constructor (name,region) {

        this.UUID = v4()
        this.name = name
        this.region = region

    }


}

let { subscribe, update, set } = writable([])

export class IslandsManager {

    addAsIsland(name,region) {
        update(n=>[...n,...[new Islands(name,region)]])
    }

    deleteUUID(UUID) {
        update(n=>n.filter(n => n.UUID !== UUID))
    }

}

export let islandsStore = { subscribe } //Only readable all state management should be done
export let islandsManager = new IslandsManager()