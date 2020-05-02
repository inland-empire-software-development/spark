import React from 'react';
import Landing, {CourseDetails, LandingProps} from '../landing/Landing';

export default {
  title: "Landing Page",
  decorators: [],
  excludeStories: /.*Data$/,
};

const coursesData: CourseDetails[] = [
  {
    id: "1",
    title: "React Fundamentals",
    nextDay: "24th",
    nextMonth: "June",
    classTimeString: "Every Saturday. 1:00 PM - 3:00 PM",
    contents: [
      "Basics of React",
      "Breakdown of the library",
      "Creating web apps with the library",
    ],
  },
  {
    id: "2",
    title: "GraphQL",
    nextDay: "24th",
    nextMonth: "June",
    classTimeString: "Every Friday. 3:00 PM - 5:00 PM",
    contents: [
      "Understanding queries",
      "Creating a GraphQL Server",
      "Client-side libaries",
    ],
  },
];

const landingDefaultData: LandingProps = {
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
  courses: coursesData,
  studentQuote: "This program changed my life. Oh em gee. The instructor is amazing and the students are all passionate.",
  studentQuoteAuthor: "Cutie Pie",
  venueDescription: "Our program will take place at one of the fastest growing incubators in the city of Riverside. It can host large meetings, be used as a co-hosting space, and is at the center of the bustling city.",
  venueAddress: {
    street1: "3499 Tenth St.",
    city: "Riverside",
    state: "CA",
    zip: "92501",
  },
  programDescription: "Spark program is a community driven learning program that provides students a working set of skills to get started building useful applications. Our courses are realistically designed and we make no false promises.",
  inspirationalQuote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  inspirationalQuoteAuthor: "Malcom X",
};

export const DefaultLandingPage = () => {
  return <Landing
    {...landingDefaultData}
  />;
};
