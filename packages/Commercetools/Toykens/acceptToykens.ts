import {  LoggedInUserClient } from "../Clients/APIClient";
import { getMe } from "../Users/getUser";

// move to server


// Examples for testing when calling this method:
// childCommercetoolsId - 2103a351-193f-47a5-b3e7-1ae065e4f82b
// itemType - any string

export const acceptToykens = async (childId:string, itemType: string, numberOfToykens: number) => {

    // ItemType not applicable for MVP
    //const me = await getMe();

    return await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/acceptToykens`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           // retailerId: me?.commerceToolsId,      // Not needed MVP as retailer doesn't receive the toykens, they are simply deducted from child account
            childShortId: childId,                   //Not secure but OK for MVP. For real we would scan the childs QR which would use their guid.
            quantity: numberOfToykens,
          }),
        }
      );
};
