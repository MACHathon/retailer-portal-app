import * as Contentful from "contentful";
import { TypePageRetailerDashboardFields } from "./TypePageRetailerDashboard";
import { TypePageRetailerlandingFields } from "./TypePageRetailerlanding";
import { TypeSeoFields } from "./TypeSeo";

export interface TypePageFields {
  name: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  seo?: Contentful.Entry<TypeSeoFields>;
  content: Contentful.Entry<
    TypePageRetailerlandingFields | TypePageRetailerDashboardFields
  >;
}

export type TypePage = Contentful.Entry<TypePageFields>;
