import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";
import SubmitProject from "../../src/components/course-lesson/SubmitProject";

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
      <div className="uk-background-default uk-flex uk-flex-between uk-flex-middle uk-width-2-3 uk-padding-small uk-margin-medium-bottom">
        <div>
          <p>Project #2 - Restaurant User Interface w/ Interaction</p>
          <p className="uk-text-meta">WD105</p>
        </div>
        <div>
          <i className="fal fa-bookmark"></i>
        </div>
      </div>

      <div className="uk-background-default uk-width-2-3 uk-padding-small uk-margin-medium-bottom">
        <p>Overview</p>
        <p>Project Description</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel
          facilisis volutpat est velit egestas. Vivamus at augue eget arcu
          dictum varius duis. Sed augue lacus viverra vitae congue eu consequat.
          Nisl suscipit adipiscing bibendum est ultricies integer quis. Egestas
          egestas fringilla phasellus faucibus scelerisque eleifend donec
          pretium vulputate. Orci porta non pulvinar neque laoreet suspendisse
          interdum consectetur.
        </p>
        <SubmitProject></SubmitProject>
      </div>

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

        <div>
          <div className="uk-flex uk-flex-between uk-padding-small uk-padding-remove-vertical">
            <p>Adobe XD Docs</p>
            <i className="fal fa-heart"></i>
          </div>
          <hr></hr>
        </div>
        <div>
          <div className="uk-flex uk-flex-between uk-padding-small uk-padding-remove-vertical">
            <p>Design Fundamentals</p>
            <i className="fal fa-heart"></i>
          </div>
          <hr></hr>
        </div>
        <div>
          <div className="uk-flex uk-flex-between uk-padding-small uk-padding-remove-vertical">
            <p>Color Theory</p>
            <i className="fal fa-heart"></i>
          </div>
          <hr></hr>
        </div>
        <div>
          <div className="uk-flex uk-flex-between uk-padding-small uk-padding-remove-vertical">
            <p>Bootstrap</p>
            <i className="fal fa-heart"></i>
          </div>
          <hr></hr>
        </div>
        <div>
          <div className="uk-flex uk-flex-between uk-padding-small uk-padding-remove-vertical">
            <p>Other Resource</p>
            <i className="fal fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Lessons;
