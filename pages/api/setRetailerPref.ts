// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import SdkAuth from "@commercetools/sdk-auth";
import { SecureApiClient } from "../../packages/Commercetools/Clients/SecureApiClient";
import { trickle } from "nprogress";

type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @Nick - Can you fill in this code?
  let retailerId: string = req.body.retailerId;
  let maxcollectionDistanceKm: number = req.body.maxcollectionDistanceKm;
  let willPayDelivery: boolean = req.body.willPayDelivery;
  let willCollect: boolean = req.body.willCollect;

  let data = {
    maxcollectionDistanceKm: maxcollectionDistanceKm,
    willPayDelivery: willPayDelivery,
    willCollect: willCollect
  }

  SecureApiClient.customObjects()
    .post({
      body: { container: `retailer_pref_${retailerId}`, key: "data", value: data },
    })
    .execute()
    .then((response: any) => {
      console.log(response);
      res.status(200).json({ data: "success" });
    });
}
