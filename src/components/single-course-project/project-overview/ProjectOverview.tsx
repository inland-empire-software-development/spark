import React from "react";

const ProjectOverview: React.SFC = ({children}) => {
  return (
    <div className="uk-background-default uk-width-2-3 uk-padding-small uk-margin-medium-bottom">
      <p>Overview</p>
      <p>Project Description</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis
        volutpat est velit egestas. Vivamus at augue eget arcu dictum varius
        duis. Sed augue lacus viverra vitae congue eu consequat. Nisl suscipit
        adipiscing bibendum est ultricies integer quis. Egestas egestas
        fringilla phasellus faucibus scelerisque eleifend donec pretium
        vulputate. Orci porta non pulvinar neque laoreet suspendisse interdum
        consectetur.
      </p>
      {children}
    </div>
  );
};

export default ProjectOverview;
