import * as Contentful from "contentful";

export interface TypeHeroFields {
    heading: Contentful.EntryFields.Symbol;
    subheading?: Contentful.EntryFields.Text;
    applyCtaLabel: Contentful.EntryFields.Symbol;
    findOutMoreLabel?: Contentful.EntryFields.Symbol;
}

export type TypeHero = Contentful.Entry<TypeHeroFields>;
