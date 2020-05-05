import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";
import CourseDescription from "../../src/components/single-course-project/ProjectDescription";
import ProjectOverview from "../../src/components/single-course-project/ProjectOverview";
import ProjectResources from "../../src/components/single-course-project/ProjectResources";
import SubmitProject from "../../src/components/single-course-project/SubmitProject";
import ProjectDirectory from "../../src/components/single-course-project/ProjectDirectory";

const Lessons: React.FC = () => (
  <DashboardLayout>
    <div>
      <ProjectDirectory></ProjectDirectory>

      <CourseDescription></CourseDescription>

      <ProjectOverview>
        <SubmitProject></SubmitProject>
      </ProjectOverview>

      <ProjectResources></ProjectResources>
    </div>
  </DashboardLayout>
);

export default Lessons;
