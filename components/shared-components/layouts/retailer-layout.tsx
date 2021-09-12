import { Fragment, ReactNode } from "react";
import { NextPage } from "next";
import { RetailHeader } from "@/components/dashboard/retail-dashboard/retail-header";
import { useContentfulData } from "@/components/hooks/useContentfulData";
import {
  TypeComponentRetailerDashboard,
  TypePageRetailerDashboard,
} from "lib/types";

interface Props {
  children: ReactNode;
}

const RetailerLayout: NextPage<Props> = ({ children }): JSX.Element => {
  const [data, isLoading] = useContentfulData<TypeComponentRetailerDashboard>(
    "EusTaxiEB6z2XfT2RUmgN"
  );

  return (
    <Fragment>
      <RetailHeader welcomeMessage={data?.fields?.welcomeLabel} />
      {children}
    </Fragment>
  );
};

export default RetailerLayout;
