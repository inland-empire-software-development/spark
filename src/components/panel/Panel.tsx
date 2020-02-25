import React from "react";
import "./Panel.scss";
import Courses from "../courses/Courses";

function Panel(props: { content: JSX.Element }): JSX.Element {
  const {content} = props;
  return (
    <div id="panel-container" >
      <div id="panel-content">
        <Courses />
        {content}
      </div>
    </div>
  );
}

export default Panel;
