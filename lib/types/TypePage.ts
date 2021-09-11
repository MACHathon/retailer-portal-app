import * as Contentful from "contentful";
import { TypePageRetailerDashboardFields } from "./TypePageRetailerDashboard";
import { TypePageRetailerlandingFields } from "./TypePageRetailerlanding";
// import { TypePage_help_center_articleFields } from "./TypePage_help_center_article";
// import { TypePage_landingFields } from "./TypePage_landing";
import { TypeSeoFields } from "./TypeSeo";

export interface TypePageFields {
    name: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    seo?: Contentful.Entry<TypeSeoFields>;
    content: Contentful.Entry</*TypePage_landingFields | TypePage_help_center_articleFields*/ | TypePageRetailerlandingFields | TypePageRetailerDashboardFields>;
}

export type TypePage = Contentful.Entry<TypePageFields>;
