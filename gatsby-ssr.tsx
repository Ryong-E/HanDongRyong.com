import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import Root from './src/components/layout/Root';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel='preload'
      href='/fonts/IBMPlexSansKR-Bold.ttf'
      type='font/ttf'
      as='font'
      crossOrigin='anonymous'
      key='interFont'
    />,
    <link
      rel='preload'
      href='/fonts/IBMPlexSansKR-Medium.ttf'
      type='font/ttf'
      as='font'
      crossOrigin='anonymous'
      key='interFont'
    />,
    <link
      rel='preload'
      href='/fonts/IBMPlexSansKR-Light.ttf'
      type='font/ttf'
      as='font'
      crossOrigin='anonymous'
      key='interFont'
    />,
  ]);
};

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  return <Root>{element}</Root>;
};
