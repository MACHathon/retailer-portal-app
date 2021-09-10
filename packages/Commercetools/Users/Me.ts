import { UserType } from "./UserType";

export type Me = {
    email: String,
    companyName: String | undefined,
    postCode: String | undefined, 
    commerceToolsId: String,
    id: String | undefined,
    userType: UserType,
    version: number
  }