import { derived, writable } from "svelte/store"
import { v4 } from "uuid"

export let registeredItemsNames = writable([])

export class Items {

    constructor (name) {

        this.UUID = v4()
        this.name = writable(name)
        this._name = name
        this.name_s = this.name.subscribe(n => this._name = n)
        this.production = writable(0)
        this._production = 0
        this.production_s = this.production.subscribe(n =>  this._production = n)
        this.consumtion = writable(0)
        this._consumtiom = 0
        this.consumtion_s = this.consumtion.subscribe(n => this._consumtiom = n)
        this.consumtionTT = derived(
            [this.consumtion],
            ([$c]) => {
                return $c
            }
        )
    }

    setProduction (production) {
        try { this.production = Number(production) } catch { this.production = 0 } //Production is expressed in tones produced per T
    }

    setConsumtion (consumtion) {
        try { this.consumtion = Number(consumtion) } catch { this.consumtion = 0 } //Consumtion is expressed in tones used per T
    }

}