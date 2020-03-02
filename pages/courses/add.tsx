import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";
import AddCourseComponent from '../../src/components/dashboard/panels/addCourse/AddCourse';

const AddCourse: React.FC = () => (
  <DashboardLayout>
    <AddCourseComponent />
  </DashboardLayout>
);

export default AddCourse;

