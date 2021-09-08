import * as Contentful from "contentful";
import { TypeComponentRetailerDashboardFields } from "./TypeComponentRetailerDashboard";

export interface TypePageRetailerDashboardFields {
    name?: Contentful.EntryFields.Symbol;
    header: Contentful.Entry<Record<string, any>>;
    dashboardComponent: Contentful.Entry<TypeComponentRetailerDashboardFields>;
}

export type TypePageRetailerDashboard = Contentful.Entry<TypePageRetailerDashboardFields>;
