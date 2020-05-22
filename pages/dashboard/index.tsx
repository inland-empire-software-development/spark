import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";
import DashboardHome, {DashboardHomeProps} from "../../src/components/dashboard/home/DashboardHome";

const Lessons: React.FC = () => {
  const dashboardData: DashboardHomeProps = {
    onSummaryItemClicked: (url) => console.log(url),
    summaryItems: [
      {
        title: "Messages",
        count: 45,
        icon: "fal fa-comments-alt",
        url: "dashboard/messages",
      },
      {
        title: "Students",
        count: 54,
        icon: "fal fa-user-friends",
        url: "dashboard/students",
      },
      {
        title: "Courses",
        count: 16,
        icon: "fal fa-chalkboard-teacher",
        url: "dashboard/courses",
      },
      {
        title: "Bookmarks",
        count: 27,
        icon: "fal fa-heart",
        url: "dashboard/bookmarks",
      },
    ],
    notifications: [
      {
        id: 1,
        title: "Message",
        content: "Tony: Hey, have you checked out the following resources for the course? They're great!",
      },
      {
        id: 2,
        title: "Instructor",
        content: "Assignment has been graded - Project One",
      },
      {
        id: 3,
        title: "Site Update",
        content: "Spark application has been updated to version 1.4.5",
      },
      {
        id: 4,
        title: "Status Update",
        content: "This is an automated server response message",
      },
      {
        id: 5,
        title: "Message",
        content: "Felipe: Do you have any notes from the class this past Saturday? HD 4 LIFE!",
      },
    ],
    currentCohort: {
      name: "Cohort 24",
      updates: [
        {
          id: 1,
          title: "Week 1 - 01/05/2021",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse reprehenderit debitis repellendus dolorem nostrum vel atque fuga magnam! Consequatur sapiente quod ducimus voluptatum, obcaecati optio nulla hic? Perspiciatis, nostrum.",
        },
        {
          id: 2,
          title: "Week 2 - 01/05/2021",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse reprehenderit debitis repellendus dolorem nostrum vel atque fuga magnam! Consequatur sapiente quod ducimus voluptatum, obcaecati optio nulla hic? Perspiciatis, nostrum.",
        },
        {
          id: 3,
          title: "Week 3 - 01/05/2021",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse reprehenderit debitis repellendus dolorem nostrum vel atque fuga magnam! Consequatur sapiente quod ducimus voluptatum, obcaecati optio nulla hic? Perspiciatis, nostrum.",
        },
        {
          id: 4,
          title: "Week 4 - 01/05/2021",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse reprehenderit debitis repellendus dolorem nostrum vel atque fuga magnam! Consequatur sapiente quod ducimus voluptatum, obcaecati optio nulla hic? Perspiciatis, nostrum.",
        },
        {
          id: 5,
          title: "Week 5 - 01/05/2021",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse reprehenderit debitis repellendus dolorem nostrum vel atque fuga magnam! Consequatur sapiente quod ducimus voluptatum, obcaecati optio nulla hic? Perspiciatis, nostrum.",
        },
      ],
    },
  };

  return (
    <DashboardLayout>
      <DashboardHome {...dashboardData}
      ></DashboardHome>
    </DashboardLayout>
  );
};

export default Lessons;
