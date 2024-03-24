import { Ability } from "./ability"

export type Pokemon = {
    id:string
    nr:number
    name:string
    image:string
    description:string
    height:string
    category:string
    weight:string
    genders:string
    types:string[]
    weaknesses:string[]
    evolutionIds:number[]
    hp:number
    attack:number
    defense:number
    specialAttack:number
    specialDefense:number
    speed:number
    variant:boolean
    abilities:Ability[]
}