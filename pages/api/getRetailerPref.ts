// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import SdkAuth from "@commercetools/sdk-auth";
import { SecureApiClient } from "../../packages/Commercetools/Clients/SecureApiClient";
import { trickle } from "nprogress";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @Nick - Can you fill in this code?
  let retailerId: string = req.body.retailerId;

  let data = await SecureApiClient.customObjects()
  .get({ queryArgs: { where: `container="retailer_pref_${retailerId}"` } })
  .execute();

  console.log("get ret pref");
  console.log(data);
  res.status(200).json({data: data.body?.results[0].value});
}
