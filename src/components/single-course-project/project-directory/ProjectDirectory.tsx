import React from "react";

const ProjectDirectory: React.SFC = () => {
  return (
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
  );
};

export default ProjectDirectory;
