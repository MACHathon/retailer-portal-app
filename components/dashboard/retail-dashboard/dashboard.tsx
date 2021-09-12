import { TypeComponentRetailerDashboard } from "lib/types";
import { RetailHeader } from "./retail-header";

export const Dashboard = ({ fields }: TypeComponentRetailerDashboard) => {
  const { welcomeLabel, notificationLabel, offersToReviewLabel } = fields;

  const tokeniseNotificationLabel = notificationLabel.replace(
    "{unreadNotificationCount}",
    (1).toString()
  );
  const tokenisedOffersToReviewLabel = offersToReviewLabel.replace(
    "{itemToReviewCount}",
    (14).toString()
  );

  return (
    <>
      <RetailHeader welcomeMessage={welcomeLabel} />
      <div className="flex-row">
        <div>{tokenisedOffersToReviewLabel}</div>
        <div>{fields.reviewCtaLabel}</div>
      </div>
      <div className="flex-row">
        <div>{fields.acceptToykensLabel}</div>
        <div>{fields.acceptToykensCtaLabel}</div>
      </div>
      <div className="flex-row">
        <div>{fields.myInventoryCtaLabel}</div>
        <div>{fields.manageAccountCtaLabel}</div>
      </div>
    </>
  );
};
