import React from "react";
import ProfessionalSummary from "./user-summary/ProfessionalSummary";
import Timeline from "../../components/timeline/Timeline";
import InfoCard from "./user-summary/Card";
// import Projects from "./user-summary/projects";
// render Summary page.
function Summary(): JSX.Element {
  return (
    <section id="Summary" className="uk-container ">
      <section className="uk-grid">
        <section className="uk-width-1-1 uk-width-2-3@s">
          <ProfessionalSummary />
          <Timeline />
          <Timeline />
        </section>
        <section className="uk-width-1-1 uk-width-1-3@s">
          <InfoCard />
        </section>
      </section>
    </section>
  );
}

export default Summary;
