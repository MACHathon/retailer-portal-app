import { NextPage } from "next";

import TitleField from "@/components/shared-components/text-fields/title-field";
import { Box } from "@chakra-ui/layout";
import ReviewHeader from "@/components/shared-components/review-section-header/review-header";
import ReviewList from "@/components/shared-components/sections-list/review-list";
import ColorNotification from "@/components/shared-components/sections/color-notification";
import { useEffect, useState } from "react";
import { getMe } from "packages/Commercetools/Users/getUser";
import React from "react";
import { Me } from "packages/Commercetools/Users/Me";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import { getRetailerPref } from "packages/Commercetools/Retailer/retailerPref";
import { IoCompassSharp, IoTimeSharp } from "react-icons/io5";
import { getCrow } from "packages/Location/getLocaility";
import retailer from "pages/[locale]/retailer";
import { assignItem, markItemAsReceived } from "packages/Commercetools/Items/assignItemToRetailer";
import HeaderLeyout from "@/components/shared-components/layouts/header-layout";
import ClientInfo from "@/components/shared-components/client-info/client-info";
import IventoryList from "@/components/shared-components/sections-list/inventory-list";
import { rewardToykens } from "packages/Commercetools/Toykens/acceptToykens";

const searchClient = algoliasearch(
    "0E1KIME6XO",
    "2835d4eac134b9e056601f8140effc1b"
  );
  

export type InventoryItem = {
  assignedToRetailer: string;
  childId: string;
  allowedDeliveryOptions: string[];
  name: string;
  description: string;
  donatorLocationLat: number;
  donatorLocationLon: number;
  donatorPostcode: string;
  condition: string;
  commercetoolsProductId: string;
  image: string;
  distanceKM: number;
  commercetoolsSkuId: string;
  received:boolean;
};

const MyInventory: NextPage = (): JSX.Element => {
  const [me, setMe] = React.useState<Me | null>(null);
  const [items, setItems] = React.useState<InventoryItem[]>([]);
  const [assignedLocalCacheWhilstReindex, setAssignedLocalCacheWhilstReindex] =
    React.useState<string[]>([]);

  useEffect(() => {
    (async () => {
      let me = await getMe();
      setMe(me);
      console.log("Me:");
      console.log(me);

      let retailerPreferences = await getRetailerPref(
        me?.commerceToolsId as string
      );

      console.log("retailerPreferences");
      console.log(retailerPreferences);
    
      const searchClient = algoliasearch(
        "0E1KIME6XO",
        "2835d4eac134b9e056601f8140effc1b"
      );
      const index = searchClient.initIndex("toykens");

      var results = await index.search(`assigned-to="${me?.commerceToolsId}`, {
        "getRankingInfo": true,
        "analytics": false,
        "enableABTest": false,
        "hitsPerPage": 10,
        "attributesToRetrieve": "*",
        "attributesToSnippet": "*:20",
        "snippetEllipsisText": "…",
        "responseFields": "*",
        "explain": "*",
        "maxValuesPerFacet": 100,
        "page": 0,
        "facets": [
         "*",
         "facets.age-range",
         "facets.brand",
         "facets.colour",
         "facets.delivery-option",
         "facets.description",
         "facets.has-box-or-wrapper",
         "facets.toy-condition",
         "sys.contentType.sys.type"
        ]
       });

      let resultItems: InventoryItem[] = [];

      console.log(results.hits);

      results.hits.forEach((hit: any) => {
        let newItem: InventoryItem = {
          assignedToRetailer: hit.facets["assigned-to"],
          allowedDeliveryOptions: hit.facets["delivery-option"],
          childId: hit.facets["child-id"],
          commercetoolsProductId: hit.id,
          commercetoolsSkuId: hit.masterVariant.sku,
          condition: hit.facets["toy-condition"],
          description:hit.facets["description"],
          donatorLocationLat: hit.facets["donator-location-lat"],
          donatorLocationLon: hit.facets["donator-location-lon"],
          donatorPostcode: hit.facets["donator-postcode"],
          image: "../../images/toy-example-image.png",
          distanceKM: 0,
          name: hit.name["en-GB"], // TODO other langs
          received: hit.facets["received-by-retailer"] == "True"
        };

        console.log(newItem);

        // Check if is applicable.
        let distanceToItem = getCrow(newItem.donatorLocationLat, newItem.donatorLocationLon, retailerPreferences.data.locationLat, retailerPreferences.data.locationLon);

        newItem.distanceKM = distanceToItem;

            
        // Don't show items just assigned but not indexed yet
        if (!assignedLocalCacheWhilstReindex.includes(newItem.commercetoolsProductId)) {
            resultItems.push(newItem);
          }
      });

      setItems(resultItems);
        

    })();
  }, [assignedLocalCacheWhilstReindex]);

  const onRejectHandler = (type: string, productId: string, sku:string, childId:string) => {

    // TODO set as unassigned

    setAssignedLocalCacheWhilstReindex( [...assignedLocalCacheWhilstReindex, productId]);

    console.log(type);
  };

  const onAddHandler = async (type: string, productId: string, sku:string, childId:string) => {
    console.log(type);

    console.log("mark as received");
    await markItemAsReceived(me?.commerceToolsId as string,productId,sku);

    // Update Toykens
    let toykens = await rewardToykens(childId, 10);

    console.log("Update Toykens");
    console.log(toykens);

    setAssignedLocalCacheWhilstReindex( [...assignedLocalCacheWhilstReindex, productId]);
  };

  return (
    <Box margin="50px 0">
      <TitleField fontSize="56px" color="#333333">
        My Inventory
      </TitleField>
      <ReviewHeader serachBar support />
      <IventoryList
        items={items}
        onRejectHandler={onRejectHandler}
        onAddHandler={onAddHandler}
        buttonLabels={true}
      />
    </Box>
  );
};

export default MyInventory;
