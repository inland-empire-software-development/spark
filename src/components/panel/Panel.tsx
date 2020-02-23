import React, {useContext} from "react";
import {Context} from '../../context';
import "./Panel.scss";

function Panel(): JSX.Element {
  const {user} = useContext(Context);
  return (
    <div id="panel-container" >
      <div id="panel-content" style={{background: "red"}}>
        Sample content - {user}
      </div>
    </div>
  );
}

export default Panel;
