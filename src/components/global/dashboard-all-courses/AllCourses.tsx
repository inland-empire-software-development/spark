import React from "react";
import './Allcourses.scss';
import CoursesNavBar from './Courses-navbar';
import IndividualCourse from './Individual-course';

function AllCourses(): JSX.Element {
  return (
    <div className='container-for-the-whole-courses-section'>
      <CoursesNavBar/>
      <div className='all-courses-container'>
        <IndividualCourse/>
        <IndividualCourse />
        <IndividualCourse />
        <IndividualCourse />
        <IndividualCourse />
        <IndividualCourse />
      </div>
    </div>
  );
}

export default AllCourses;
