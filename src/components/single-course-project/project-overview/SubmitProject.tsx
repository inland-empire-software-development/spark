import React from "react";

const SubmitProject: React.SFC = () => {
  return (
    <div>
      <p>Submit Project:</p>
      <div className="js-upload uk-placeholder uk-text-center">
        <span uk-icon="icon: cloud-upload"></span>
        <span className="uk-text-middle">
          Attach binaries by dropping them here or{" "}
        </span>
        <div className="uk-form-custom">
          <input type="file" multiple />
          <span className="uk-link">selecting one</span>
        </div>
      </div>
    </div>
  );
};

export default SubmitProject;
