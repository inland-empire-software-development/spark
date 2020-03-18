import React from "react";
import './ManageStudents.scss';

const ManageStudents: React.FC = () => {
  return (
    <div className="manage-students">
      <div className="uk-card uk-card-default uk-card-body">
        <ul data-uk-tab>
          <li className="uk-active"><a href="#">WEB101</a></li>
          <li><a href="#">WEB102</a></li>
          <li><a href="#">CS101</a></li>
          <li><a href="#">GD101</a></li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default ManageStudents;
