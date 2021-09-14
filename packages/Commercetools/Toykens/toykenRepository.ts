const TalonOne = require("talon_one");
const defaultClient = TalonOne.ApiClient.instance;
defaultClient.basePath = "https://valtech.europe-west1.talon.one";

const api_key_v1 = defaultClient.authentications["api_key_v1"];
api_key_v1.apiKey = process.env.NEXT_PUBLIC_TALONONE_API_KEY ?? "";
api_key_v1.apiKeyPrefix = "ApiKey-v1";
const integrationApi = new TalonOne.IntegrationApi();

export const getToykensForCustomer = async (customerId: string) => {
  let result = await integrationApi.getCustomerInventory(customerId, {
    loyalty: true,
  });

  return result?.loyalty?.programs?.SampleWallet?.ledger?.currentBalance ?? 0;
};

export const incrementToykensForCustomer = async (customerId: string) => {
  let result = await adjustToykens(customerId, 1);
  return result?.loyalty?.programs?.SampleWallet?.ledger?.tentativeCurrentBalance ?? 0;
};

export const decrementToykensForCustomer = async (customerId: string) => {
  let result = await adjustToykens(customerId, -1);
  return result?.loyalty?.programs?.SampleWallet?.ledger?.tentativeCurrentBalance ?? 0;
};

async function adjustToykens(customerId: string, toykenChange: number) {
  return await integrationApi.updateCustomerProfileV2(
    customerId,
    {
      attributes: {
        toyken_change: toykenChange,
      },
      responseContent: ["loyalty"],
    },
    { runRuleEngine: true }
  );
}
