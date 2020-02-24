import React from "react";
import IndividualCourse from './Individual-course';

function CoursesNavBar(): JSX.Element {
  return (
    <>
      <nav className="nav-margin uk-navbar-container uk-margin uk-margin-xlarge-left" uk-navbar>
        <div className="uk-navbar-left">
          <span className="uk-navbar-item uk-logo all-courses-logo">All Courses</span>
          <div id="auto-left">
            <form action="javascript:void(0)">
              <button id='all-courses-button' uk-icon="chevron-down" className="uk-button uk-button-default uk-icon-link uk-margin-small-right" type="button">Newly Published </button>
              <div uk-dropdown="pos: bottom-justify">
                <ul className="uk-nav uk-dropdown-nav">
                  <li className="uk-nav-header">Header1</li>
                  <li className="uk-nav-header">Header2</li>
                  <li className="uk-nav-header">Header3</li>
                  <li className="uk-nav-header">Header4</li>
                </ul>
              </div>
              <input id='all-courses-input' className="uk-width-1-3 uk-input uk-form-width-small uk-margin-large-left" type="text" placeholder="Search Courses" />
            </form>
          </div>
        </div>
        <IndividualCourse />
        <IndividualCourse />
        <IndividualCourse />
      </nav>
    </>
  );
}

export default CoursesNavBar;
