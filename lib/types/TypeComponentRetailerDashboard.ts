import * as Contentful from "contentful";

export interface TypeComponentRetailerDashboardFields {
    name?: Contentful.EntryFields.Symbol;
    welcomeLabel: Contentful.EntryFields.Symbol;
    notificationLabel: Contentful.EntryFields.Symbol;
    offersToReviewLabel: Contentful.EntryFields.Text;
    reviewCtaLabel: Contentful.EntryFields.Symbol;
    acceptToykensLabel: Contentful.EntryFields.Text;
    acceptToykensCtaLabel: Contentful.EntryFields.Symbol;
    myInventoryCtaLabel: Contentful.EntryFields.Symbol;
    manageAccountCtaLabel: Contentful.EntryFields.Symbol;
}

export type TypeComponentRetailerDashboard = Contentful.Entry<TypeComponentRetailerDashboardFields>;
