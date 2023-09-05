import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import Root from './src/components/layout/Root';

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  return <Root>{element}</Root>;
};

export const onRenderBody = (gatsbyUtils) => {
  const { setHtmlAttributes } = gatsbyUtils;
  setHtmlAttributes({ lang: 'ko' });
};
