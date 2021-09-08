import _ from "lodash";
import React from "react";
import type { Entry } from "contentful";

import { Hero } from "./hero";
import { Dashboard } from "components/dashboard/retail-dashboard";
import { MainHeader } from "components/shared-components/header/main-header";
import { ComponentContentTypes, PageContentType } from "../../lib/constants";

type BlockRendererProps = {
  block: any;
};

const BlockRenderer = ({ block }: BlockRendererProps) => {
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => (
          <BlockRenderer key={`block-${b.sys.id}`} block={b} />
        ))}
      </>
    );
  }

  const contentTypeId = _.get(block, "sys.contentType.sys.id");
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = block.sys;

  const componentProps = {
    ...block,
    parent: block.parent,
  };

  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

const fromPage = (fieldName: string) => (parent: Entry<unknown>) =>
  <BlockRenderer block={{ ...parent?.fields[fieldName], parent }} />;

const ContentTypeMap = {
  [ComponentContentTypes.ContentCtaBlock]: null,
  [ComponentContentTypes.Dashboard]: Dashboard,
  [ComponentContentTypes.Header]: MainHeader,
  [ComponentContentTypes.Hero]: Hero,
  [PageContentType]: fromPage("content"),
};

export { BlockRenderer };
