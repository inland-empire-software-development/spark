import React from "react";

const ProjectResources: React.SFC = ({children}) => {
  return (
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

      {children}
    </div>
  );
};

export default ProjectResources;
