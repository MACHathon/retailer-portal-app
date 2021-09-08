import * as Contentful from "contentful";

export interface TypeComponentContentCtaBlockFields {
    blockContent: Contentful.EntryFields.Text;
}

export type TypeComponentContentCtaBlock = Contentful.Entry<TypeComponentContentCtaBlockFields>;
