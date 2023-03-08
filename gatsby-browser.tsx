import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import Root from './src/components/Root';
import './src/global.css';
export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  return <Root>{element}</Root>;
};
