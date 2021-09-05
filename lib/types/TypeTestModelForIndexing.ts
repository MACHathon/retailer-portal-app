import * as Contentful from "contentful";

export interface TypeTestModelForIndexingFields {
    title?: Contentful.EntryFields.Symbol;
}

export type TypeTestModelForIndexing = Contentful.Entry<TypeTestModelForIndexingFields>;
