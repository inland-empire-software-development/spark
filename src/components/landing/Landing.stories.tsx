import React from 'react';
import Landing from '../landing/Landing';

export default {
  title: "Landing Page",
  decorators: [],
  excludeStories: /.*Data$/,
};

const landingDefaultData = {
  coverImage: "/images/landing/landingcover.jpg",
  venueImage: "/images/landing/riverside-sample.jpg",
  programImage: "/images/spark.png",
};

export const DefaultLandingPage = () => {
  return <Landing
    {...landingDefaultData}
  />;
};
