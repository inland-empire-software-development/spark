import React from "react";
import "./Panel.scss";
import AllCourses from "../global/dashboard-all-courses/AllCourses";

function Panel(props: { content: JSX.Element }): JSX.Element {
  const {content} = props;
  return (
    <div id="panel-container" >
      <div id="panel-content">
        <AllCourses/>
        {content}
      </div>
    </div>
  );
}

export default Panel;
