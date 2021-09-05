import * as Contentful from "contentful";
import { TypeHeroFields } from "./TypeHero";

export interface TypePageRetailerlandingFields {
    name?: Contentful.EntryFields.Symbol;
    hero?: Contentful.Entry<TypeHeroFields>;
}

export type TypePageRetailerlanding = Contentful.Entry<TypePageRetailerlandingFields>;
