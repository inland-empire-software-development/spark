import React from 'react';
import Landing from '../landing/Landing';

export default {
  title: "Landing Page",
  decorators: [],
  excludeStories: /.*Data$/,

};

export const DefaultLandingPage = () => {
  return <Landing />;
};
