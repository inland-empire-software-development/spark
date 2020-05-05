import React from "react";

import "./ProjectResources.scss";

const ProjectResources: React.SFC = ({ children }) => {
  return (
    <div className="uk-background-default uk-width-2-3 uk-padding-small">
      <h3 className="title">Resources</h3>
      <form>
        <div
          className="uk-width-1-1 uk-padding-small uk-padding-remove-horizontal uk-padding-remove-top"
          uk-form-custom="target: > * > span:first-child"
        >
          <select>
            <option>All Resources</option>
          </select>
          <button
            className="dropdown-button uk-width-1-1 uk-flex uk-flex-between uk-flex-middle uk-button uk-button-default uk-background-muted uk-text-capitalize"
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
