import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";
import CourseDescription from "../../src/components/single-course-project/project-description/ProjectDescription";
import ProjectOverview from "../../src/components/single-course-project/project-overview/ProjectOverview";
import ProjectResources from "../../src/components/single-course-project/project-resources/ProjectResources";
import SubmitProject from "../../src/components/single-course-project/project-overview/SubmitProject";
import ProjectDirectory from "../../src/components/single-course-project/project-directory/ProjectDirectory";
import ResourceModule from "../../src/components/single-course-project/resource-module/ResourceModule";

const Lessons: React.FC = () => (
  <DashboardLayout>
    <div>
      <ProjectDirectory></ProjectDirectory>

      <CourseDescription></CourseDescription>

      <ProjectOverview>
        <SubmitProject></SubmitProject>
      </ProjectOverview>

      <ProjectResources>
        <ResourceModule></ResourceModule>
        <ResourceModule></ResourceModule>
        <ResourceModule></ResourceModule>
        <ResourceModule></ResourceModule>
        <ResourceModule></ResourceModule>
      </ProjectResources>
    </div>
  </DashboardLayout>
);

export default Lessons;
