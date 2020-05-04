import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";
import ResourceModule from "../../src/components/course-lesson/ResourceModule";
import CourseDescription from "../../src/components/course-lesson/CourseDescription";
import ProjectOverview from "../../src/components/course-lesson/ProjectOverview";

const Lessons: React.FC = () => (
  <DashboardLayout>
    <div>
      <div className="uk-background-muted uk-flex uk-flex-between uk-flex-middle uk-width-2-3 uk-padding-small uk-margin-medium-bottom">
        <p>Dashboard</p>
        <ul className="uk-breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Course</a>
          </li>
          <li>
            <a href="#">Lectures</a>
          </li>
          <li>
            <span>Project #2</span>
          </li>
        </ul>
      </div>

      <CourseDescription></CourseDescription>

      <ProjectOverview></ProjectOverview>

      <div className="uk-background-default uk-width-2-3 uk-padding-small">
        <p>Resources</p>
        <form>
          <div uk-form-custom="target: > * > span:first-child">
            <select className="uk-width-1-1 uk-select uk-background-muted">
              <option>All Resources</option>
            </select>
            <button
              className="uk-button uk-button-default"
              type="button"
              tabIndex={-1}
            >
              <span></span>
              <i className="fa fa-chevron-down"></i>
            </button>
          </div>
        </form>

        <ResourceModule></ResourceModule>
        <ResourceModule></ResourceModule>
        <ResourceModule></ResourceModule>
        <ResourceModule></ResourceModule>
        <ResourceModule></ResourceModule>
      </div>
    </div>
  </DashboardLayout>
);

export default Lessons;
