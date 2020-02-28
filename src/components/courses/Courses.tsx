import React from "react";
import './Courses.scss';
import CoursesNavBar from '../courses-navigation/Navigation';
import Course from "../course/Course";

function Courses(): JSX.Element {
  return (
    <>
      <CoursesNavBar/>
      <Course />
      <Course />
      <Course />
      <Course />
    </>

  );
}

export default Courses;
