import React from "react";

function CoursesNavBar(): JSX.Element {
  return (
    <nav>
      <ul>
        <li className="all-courses">All Courses</li>
        <li className='select'>
          <select>
            <option>Newly Published</option>
            <option>All Courses</option>
          </select>
        </li>
        <li>
          <input className="input" type="text" placeholder="Search" />
        </li>
      </ul>
    </nav>
  )
}

export default CoursesNavBar;
