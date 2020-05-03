import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";

const Lessons: React.FC = () => (
  <DashboardLayout>
    <div>
      <div className="uk-background-muted uk-flex uk-flex-between uk-flex-middle uk-width-2-3 uk-margin-medium-bottom">
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
      <div className="uk-background-default uk-flex uk-flex-between uk-flex-middle uk-width-2-3 uk-margin-medium-bottom">
        <div>
          <p>Project #2 - Restaurant User Interface w/ Interaction</p>
          <p>WD105</p>
        </div>
        <div>
          <i className="fal fa-bookmark"></i>
        </div>
      </div>

      <div className="uk-background-default uk-width-2-3">
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
        <div>
          <p>Submit Project:</p>
          <div className="js-upload uk-placeholder uk-text-center">
            <span uk-icon="icon: cloud-upload"></span>
            <span className="uk-text-middle">
              Attach binaries by dropping them here or{" "}
            </span>
            <div className="uk-form-custom">
              <input type="file" multiple />
              <span className="uk-link">selecting one</span>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-background-default uk-width-2-3">
        <p>Resources</p>
      </div>
    </div>
  </DashboardLayout>
);

export default Lessons;
