import React from "react";
import ResourceModule from "./ResourceModule";

const ProjectResources: React.SFC = () => {
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

      <ResourceModule></ResourceModule>
      <ResourceModule></ResourceModule>
      <ResourceModule></ResourceModule>
      <ResourceModule></ResourceModule>
      <ResourceModule></ResourceModule>
    </div>
  );
};

export default ProjectResources;
