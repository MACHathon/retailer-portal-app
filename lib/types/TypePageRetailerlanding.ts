import * as Contentful from "contentful";
import { TypeComponentContentCtaBlockFields } from "./TypeComponentContentCtaBlock";
import { TypeHeroFields } from "./TypeHero";

export interface TypePageRetailerlandingFields {
    name?: Contentful.EntryFields.Symbol;
    header: Contentful.Entry<Record<string, any>>;
    hero?: Contentful.Entry<TypeHeroFields>;
    contentCtaBlocks: Contentful.Entry<TypeComponentContentCtaBlockFields>[];
}

export type TypePageRetailerlanding = Contentful.Entry<TypePageRetailerlandingFields>;
