import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";
import CourseDescription from "../../src/components/course-lesson/CourseDescription";
import ProjectOverview from "../../src/components/course-lesson/ProjectOverview";
import ProjectResources from "../../src/components/course-lesson/ProjectResources";
import SubmitProject from "../../src/components/course-lesson/SubmitProject";
import ProjectDirectory from "../../src/components/course-lesson/ProjectDirectory";

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
