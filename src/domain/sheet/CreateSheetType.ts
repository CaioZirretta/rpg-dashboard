import { AttributesEnum } from "./SheetEnums";

export type CreateSheetType = {
    character: string
    player: string
    strength: number
    presence: number
    intellect: number
    vigor: number
    agility: number
    origin: string
    class: string
    nex: number
    peRound: number
    displacement: number
    pv: number
    pe: number
    defense: number
    sanity: number
    protection: Protection
    resistance: Resistance
    skill: Skill
    ritual: Ritual
    ritualDT: number
    attack: Attack
    ability: Ability
    inventory: Inventory
    prestigePoints: number
    patent: string
    itemLimit: number
    creditLimit: string
    maximumWeight: number
    description: Description
}

export type Protection = string[]

export type Resistance = string[]

export type Skill = Record<string, SkillDetails>

export type SkillDetails = {
    attribute: AttributesEnum
    bonus: number
    trainingLevel: number
    other: string
}

export type Ritual = {
    name: string,
    cost: number,
    page: string,
    description: string
}

export type Attack = {
    name: string,
    test: string,
    damage: string,
    other: string,
}

export type Ability = Ritual

export type Inventory = {
    item: string,
    category: number,
    space: number
}

export type Description = Array<{
    appearance: string,
    personality: string,
    history: string,
    objective: string,
}>
