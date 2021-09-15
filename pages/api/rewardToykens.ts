// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import SdkAuth from "@commercetools/sdk-auth";
import { SecureApiClient } from "../../packages/Commercetools/Clients/SecureApiClient";
import { decrementToykensForCustomer, incrementToykensForCustomer } from "packages/Commercetools/Toykens/toykenRepository";

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

  var response = await SecureApiClient.customers()
    .get({ queryArgs: { where: `title = "${childShortId}"` } })
    .execute();

  if (response.statusCode == 200) {

    if (response.body.results.length > 0) {
      childCommercetoolsId = response.body.results[0].id;
      
      for (let i = 0; i < quantity; i++)
      {
        await incrementToykensForCustomer(childCommercetoolsId);
      }     
    }
  }

  res.status(200).json({ data: "success" });
}
