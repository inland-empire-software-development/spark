import React from "react";
import './Allcourses.scss';
import CoursesNavBar from './Courses-navbar';

function AllCourses(): JSX.Element {
  return (
    <div className='uk-container uk-container-expand container-for-the-whole-courses-section'>
      <CoursesNavBar/>
    </div>
  );
}

export default AllCourses;
