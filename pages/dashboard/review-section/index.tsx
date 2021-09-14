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
import { assignItem } from "packages/Commercetools/Items/assignItemToRetailer";

const searchClient = algoliasearch(
  "0E1KIME6XO",
  "2835d4eac134b9e056601f8140effc1b"
);

export type Item = {
  assignedToRetailer: string,
  childId: string,
  allowedDeliveryOptions: string[],
  name: string,
  description: string,
  donatorLocationLat: number,
  donatorLocationLon: number,
  donatorPostcode: string,
  condition: string,
  commercetoolsProductId: string,
  image: string,
  distanceKM: number,
  commercetoolsSkuId: string
}


const ReviewSection: NextPage = (): JSX.Element => {
  const [colorNotification, setColorNotification] = useState<boolean>(false);
  const [notificationType, setNotificationType] = useState<string>("");
  const [me, setMe] = React.useState<Me | null>(null);
  const [items, setItems] = React.useState<Item[]>([]);
  const [assignedLocalCacheWhilstReindex, setAssignedLocalCacheWhilstReindex] = React.useState<string[]>([]);

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

      let deliveryOptionFilters = [
        "facets.delivery-option:deliver ( within 20 miles )",
        "facets.delivery-option:drop off locally ( within 5 miles )",
        "facets.delivery-option:post (ill pay)",
      ];

      if (retailerPreferences.data.willCollect) {
        console.log("willCollect");
        deliveryOptionFilters.push("facets.delivery-option:collection");
      }
      if (retailerPreferences.data.willPayDelivery) {
        console.log("willPayDelivery");
        deliveryOptionFilters.push("facets.delivery-option:post (retailer pays)");
      }

      const searchClient = algoliasearch(
        "0E1KIME6XO",
        "2835d4eac134b9e056601f8140effc1b"
      );
      const index = searchClient.initIndex("toykens");

      var results = await index.search("", {
        getRankingInfo: true,
        analytics: false,
        enableABTest: false,
        hitsPerPage: 10,
        attributesToRetrieve: "*",
        attributesToSnippet: "*:20",
        snippetEllipsisText: "…",
        responseFields: "*",
        explain: "*",
        page: 0,
        maxValuesPerFacet: 100,
        facets: [
          "*",
          "facets.age-range",
          "facets.brand",
          "facets.colour",
          "facets.delivery-option",
          "facets.description",
          "facets.has-box-or-wrapper",
          "facets.toy-condition",
          "sys.contentType.sys.type",
        ],
        facetFilters: [
          deliveryOptionFilters,
        ],
      });

      let resultItems: Item[] = [];

      console.log( results.hits);

      results.hits.forEach((hit: any) => {
        let newItem: Item = {
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
          name: hit.name["en-GB"] // TODO other langs
        };

        console.log(newItem);

        // Check if is applicable.
        let distanceToItem = getCrow(newItem.donatorLocationLat, newItem.donatorLocationLon, retailerPreferences.data.locationLat, retailerPreferences.data.locationLon);
       
        newItem.distanceKM = distanceToItem;
        
       // if (distanceToItem < retailerPreferences.data.maxcollectionDistanceKm)
        {
          if (newItem.assignedToRetailer == 'unassigned') { // need to fix this in the search query

            // Don't show items just assigned but not indexed yet
            if (!assignedLocalCacheWhilstReindex.includes(newItem.commercetoolsProductId)) {
              resultItems.push(newItem);
            }
           
          }
        }
      });

      setItems(resultItems);

    })();

    if (colorNotification) {
      const timer = setTimeout(() => {
        setColorNotification(false);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [colorNotification]);

  const onRejectHandler = (type: string) => {
    setColorNotification(true);
    setNotificationType(type);
  };

  const onAddHandler = async (type: string, productId: string, sku:string) => {
    setColorNotification(true);
    setNotificationType(type);

    let assigned = await assignItem(me?.commerceToolsId as string,productId,sku, me?.companyName as string, me?.postCode as string);
    console.log("pid="+productId);
    console.log("pid="+sku);
    console.log(assigned);

    setAssignedLocalCacheWhilstReindex( [...assignedLocalCacheWhilstReindex, productId]);
  };

  return (
    <Box margin="50px 0">
      <TitleField fontSize="56px" color="#333333">
        Review Offers
      </TitleField>
      <ReviewHeader />
      {colorNotification && (
        <ColorNotification notificationType={notificationType} />
      )}
      <ReviewList
        items={items}
        onRejectHandler={onRejectHandler}
        onAddHandler={onAddHandler}
      />
    </Box>
  );
};

export default ReviewSection;
