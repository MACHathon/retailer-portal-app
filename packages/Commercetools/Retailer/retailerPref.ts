export const setRetailerPref = async (retailerId:string, retailerPostcode:string, maxcollectionDistanceKm: number, willPayDelivery: boolean, willCollect: boolean) => {

    // Get lat lon
    let latlon = await getLatLon(retailerPostcode);
    

    const rawResponse = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/setRetailerPref`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            retailerId:retailerId,
            maxcollectionDistanceKm: maxcollectionDistanceKm,
            willPayDelivery: willPayDelivery,
            willCollect: willCollect,
            locationLat: latlon?.lat,
            locationLon: latlon?.lon,
        }),
      });

      if (rawResponse.status != 200) {
        // Error
      } else {
        const content = await rawResponse.json();

        console.log(content);
      }
   
};

const getLatLon = async (
  postcode: string
) => {
  let rawResponse = await fetch(
    `https://api.postcodes.io/postcodes/${postcode}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  if (rawResponse.status != 200) {
    // handle error
    console.log("error");
    console.log(rawResponse);
  } else {
    const content = await rawResponse.json();

    let lat = content.result.latitude;
    let lon = content.result.longitude;

    return { lat, lon }
   
    }
};

export const getRetailerPref = async (retailerId:string) => {

    const rawResponse = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/getRetailerPref`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            retailerId:retailerId
        }),
      });

      if (rawResponse.status != 200) {
        // Error
      } else {
        const content = await rawResponse.json();

        return content;
      }
   
};

