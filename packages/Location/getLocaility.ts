// In the real world would probably do this on index..
// Instead we get every item based on other preferences then filter by location based on this.
export const getDistance = async (
  offerdItemPostcode: string,
  retailerPostcode: string
) => {
  let rawResponse = await fetch(
    `https://api.postcodes.io/postcodes/${offerdItemPostcode}`,
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

    let itemLat = content.result.latitude;
    let itemLon = content.result.longitude;

    //  Get retailer data
    let rawRetailerResponse = await fetch(
      `https://api.postcodes.io/postcodes/${retailerPostcode}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (rawRetailerResponse.status != 200) {
      // handle error
      console.log("error");
      console.log(rawRetailerResponse);
    } else {
      const contentRetailer = await rawRetailerResponse.json();

      console.log(contentRetailer);

      let retailerLat = contentRetailer.result.latitude;
      let retailerLon = contentRetailer.result.longitude;

      // Get distance
      let distanceKm = calcCrow(itemLat, itemLon, retailerLat, retailerLon);

      //console.log(distanceKm);

      return distanceKm;
    }
  }
};

function calcCrow(lat1: any, lon1: any, lat2: any, lon2: any) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1: any = toRad(lat1);
  var lat2: any = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value: any) {
  return (Value * Math.PI) / 180;
}
