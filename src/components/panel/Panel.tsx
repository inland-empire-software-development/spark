import React from "react";
import "./Panel.scss";

function Panel(props: { content: JSX.Element }): JSX.Element {
  const {content} = props;
  return (
    <div id="panel-container" >
      <div id="panel-content">
        {content}
      </div>
    </div>
  );
}

export default Panel;
