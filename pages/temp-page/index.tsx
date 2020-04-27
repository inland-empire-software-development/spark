import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";

const Lessons: React.FC = () => (
  <DashboardLayout>
    <div>
      <div className="uk-flex uk-flex-between uk-flex-middle uk-width-2-3">
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
      <div className="uk-flex uk-flex-between uk-flex-middle uk-width-2-3">
        <div>
          <p>Project #2 - Restaurant User Interface w/ Interaction</p>
          <p>WD105</p>
        </div>
        <div>
          <i className="fal fa-bookmark"></i>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Lessons;
