import React from "react";
import ErrorPage from "next/error";

import { getPage } from "lib/api";
import { isPreviewEnabled } from "lib/preview";
import { PageHead } from "components/shared-components/page-head";
import { PageContentTypes } from "lib/constants";
import { TypePage, TypePageRetailerDashboard } from "lib/types";
import { BlockRenderer } from "components/renderer/block-renderer";
import { withLocale } from "lib/translations";

type LandingProps = {
  page: TypePage;
};

export default function Landing({ page }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  const content = page.fields.content as TypePageRetailerDashboard;
  const { header = [], dashboardComponent = [] } = content?.fields;

  return (
    <div className="w-full pb-16 lg:pb-24">
      <PageHead page={page} />
      <BlockRenderer block={header} />
      <BlockRenderer block={dashboardComponent} />
    </div>
  );
}

export const getServerSideProps = withLocale(
  async (locale, { params, query }) => {
    const slug = String(params?.slug ?? "/");
    const preview = isPreviewEnabled(query);
    const page = await getPage({
      slug,
      preview,
      locale,
      pageContentType: PageContentTypes.Dashboard,
    });

    return {
      props: { page },
    };
  }
);
