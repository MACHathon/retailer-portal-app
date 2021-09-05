import * as Contentful from "contentful";

export interface TypeHeroFields {
    heading: Contentful.EntryFields.Symbol;
    subheading?: Contentful.EntryFields.Text;
}

export type TypeHero = Contentful.Entry<TypeHeroFields>;
