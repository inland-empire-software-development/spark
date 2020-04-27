import React from "react";
import Head from 'next/head';
import DashboardLayout from "../../src/components/layouts/DashboardLayout";
import AddCourseComponent from '../../src/components/dashboard/panels/addCourse/AddCourse';
const AddCourse: React.FC = () => (
  <DashboardLayout>
    <Head>
      <script type="text/javascript" src="/scripts/upload.js" />
    </Head>
    <AddCourseComponent />
  </DashboardLayout>
);
export default AddCourse;
