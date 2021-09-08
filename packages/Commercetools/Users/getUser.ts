import { LoggedInUserClient } from "../Clients/APIClient";
import { Me } from "./Me";
import { UserType } from "./UserType";


const getMeRequest = () => {
  return LoggedInUserClient.me()
  .get()
  .execute(); 
};

export const getMe = async () => {

  try {
    const response = await getMeRequest();
    if (!!response?.body?.id) {

      let userType = getUserType(response.body.companyName);
      let postCode = response.body.addresses.length ? response.body.addresses[0].postalCode : '';
      
      const me: Me = {
        email: response.body.email,
        companyName: response.body.companyName,  
        postCode: postCode,
        commerceToolsId: response.body.id,
        id: response.body.id,
        userType: userType,
        version: response.body.version
      }

      return me;
    }
    return null;
  } catch (e) {
    return null;
  } 
};

export const getUserType = (companyName:string | undefined) : UserType => {

    return 'retailer';
}



/*const literal: UserType  = 'child'
const method = (val: UserType) => {
  if (val === 'parent') ... // val is 'parent'
  else ... // val is 'bar'
}*/
