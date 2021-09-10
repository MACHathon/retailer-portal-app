export const setRetailerPref = async (retailerId:string, maxcollectionDistanceKm: number, willPayDelivery: boolean, willCollect: boolean) => {

    
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
            willCollect: willCollect
        }),
      });

      if (rawResponse.status != 200) {
        // Error
      } else {
        const content = await rawResponse.json();

        console.log(content);
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

        console.log(content);
      }
   
};

