import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";
import Courses from "../../src/components/courses/Courses";

const AllCourses: React.FC = () => (
  <DashboardLayout>
    <Courses/>
  </DashboardLayout>
);

export default AllCourses;
