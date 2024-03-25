import { writable } from "svelte/store"

export let trades = writable([])

export class Trades {

    constructor (name) {
        this.name = name
        
    }


}