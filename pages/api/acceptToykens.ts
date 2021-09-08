// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import SdkAuth from "@commercetools/sdk-auth";
import { SecureApiClient } from "../../packages/Commercetools/Clients/SecureApiClient";

type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @Nick - Can you fill in this code?
  let childShortId: string = req.body.childShortId;
  let quantity: number = req.body.quantity;

  let childCommercetoolsId = '';

  // For Child try get email address based on the username provided - Probably not ideal but its a hackathon :)
  var response = await SecureApiClient.customers()
    .get({ queryArgs: { where: `title = "${childShortId}"` } })
    .execute();

  if (response.statusCode == 200) {

    if (response.body.results.length > 0) {
      childCommercetoolsId = response.body.results[0].id;
      console.log(childCommercetoolsId);
    }
  }

  res.status(200).json({ data: "success" });
}
