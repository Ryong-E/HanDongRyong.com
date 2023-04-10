import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import Root from './src/components/layout/Root';
import './src/global.css';

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
  return <Root>{element}</Root>;
};
