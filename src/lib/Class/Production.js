import { itemsList } from "./Items.js"
import { v4 } from "uuid"

export class Production {

    constructor (production,itemsID) {

        try { this.production = Number(production) } catch { this.production = 0 } //Production is expressed in tones produced per T
        this.items = itemsList.getItemFromId(itemsID) //Add an items since a production is laways of an items
        this.UUID = v4() //UUID

    }

}