import React from "react";
import "./Panel.scss";

const Panel: React.FC = function(props): JSX.Element {
  const {children} = props;
  return (
    <div id="panel-container" >
      <div id="panel-content">
        {children}
      </div>
    </div>
  );
};

export default Panel;
