import Professional_Summary from "./user-summary/professional_summary";
import Education from "./user-summary/education";
import InfoCard from "./user-summary/card";
import Experience from "./user-summary/experience";
import Projects from "./user-summary/projects";
// render Summary page.
function Summary(): JSX.Element {
  return (
    <section id="Summary" className="uk-container uk-padding-large">
      <section className="uk-grid">
        <section className="uk-width-2-3">
          <Professional_Summary/>
          <Education/>
          <Experience/>
        </section>
        <section className="uk-width-1-3">
          <InfoCard/>
        </section>
      </section>
      <section className="uk-grid">
        <Projects/>
      </section>

    </section>

  );
}

export default Summary;
