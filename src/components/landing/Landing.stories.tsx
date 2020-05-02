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
  cohortInfo: {
    startDay: "15th",
    startMonth: "April",
    durationWeeks: 10,
    classTimeString: "Every Saturday. 12:00 PM - 3:00 PM",
    seats: 16,
  },
};

export const DefaultLandingPage = () => {
  return <Landing
    {...landingDefaultData}
  />;
};
