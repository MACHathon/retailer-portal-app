import { TypeComponentRetailerDashboard } from "lib/types";

export const Dashboard = ({ fields }: TypeComponentRetailerDashboard) => {
  const { welcomeLabel, notificationLabel, offersToReviewLabel } = fields;

  const tokenisedWelcomeLabel = welcomeLabel.replace(
    "{retailerName}",
    "Oxford Books"
  );
  const tokeniseNotificationLabel = notificationLabel.replace(
    "{unreadNotificationCount}",
    (1).toString()
  );
  const tokenisedOffersToReviewLabel = offersToReviewLabel.replace(
    "{itemToReviewCount}",
    (14).toString()
  );

  return (
    <div>
      <div>
        <div>{tokenisedWelcomeLabel}</div>
        <div>{tokeniseNotificationLabel}</div>
      </div>
      <div>
        <div>{tokenisedOffersToReviewLabel}</div>
        <div>{fields.reviewCtaLabel}</div>
      </div>
      <div>
        <div>{fields.acceptToykensLabel}</div>
        <div>{fields.acceptToykensCtaLabel}</div>
      </div>
      <div>
        <div>{fields.myInventoryCtaLabel}</div>
        <div>{fields.manageAccountCtaLabel}</div>
      </div>
    </div>
  );
};
