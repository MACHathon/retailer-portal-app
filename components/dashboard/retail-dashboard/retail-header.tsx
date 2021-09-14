import type { NextPage } from "next";

import HeaderLeyout from "components/shared-components/layouts/header-layout";
import ClientInfo from "components/shared-components/client-info/client-info";
import MessagesNotification from "@/components/dashboard/retail-dashboard/header-element/messages-notification";
import { useEffect } from "react";
import React from "react";
import { Me } from "packages/Commercetools/Users/Me";
import { getMe } from "packages/Commercetools/Users/getUser";

type RetailHeaderProps = {
  welcomeMessage: string;
};

export const RetailHeader = (props: RetailHeaderProps): JSX.Element => {
  const [me, setMe] = React.useState<Me | null>(null);

  useEffect(() => {
    (async () => {
      let me = await getMe();
      setMe(me);
      console.log("Me:");
      console.log(me);
    })();
  }, []);

  return (
    <HeaderLeyout>
      <ClientInfo message={`${props.welcomeMessage} ${me?.companyName}`} />
      {/* <MessagesNotification /> */}
    </HeaderLeyout>
  );
};
