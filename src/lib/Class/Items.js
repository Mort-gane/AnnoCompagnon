import { writable } from "svelte/store"
import { v4 } from "uuid"

export let registeredItemsNames = writable([])

export class Items {

    constructor (name) {

        this.UUID = v4() //UUID
        this.name = name
        this.production = 0
        this.consumtion = 0

    }

    setProduction (production) {
        try { this.production = Number(production) } catch { this.production = 0 } //Production is expressed in tones produced per T
    }

    setConsumtion (consumtion) {
        try { this.consumtion = Number(consumtion) } catch { this.consumtion = 0 } //Consumtion is expressed in tones used per T
    }

}