import { writable } from "svelte/store"
import { v4 } from "uuid"

export let registeredProductionNames = writable(["TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST","TEST"])

export class Production {

    constructor (production) {

        try { this.production = Number(production) } catch { this.production = 0 } //Production is expressed in tones produced per T
        this.UUID = v4() //UUID

    }

}