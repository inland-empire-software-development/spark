import "./Timeline.scss";
// render timeline page.
function Timeline(): JSX.Element {
  return (
    <section id="timeline" className="uk-padding-small">
      <h2 className="uk-padding-small medium-family font20 uk-text-bold uk-margin-remove-bottom">My Education</h2>
      <section className="timeline uk-width-3-3">
        <section className="Data-container right ">
          <section id="target"></section>
          <section className="contents uk-remove-padding">
            <h5 className="uk-margin-remove font18 book-family">
              Harvard University{" "}
              <span className="uk-text-muted font14">2015 - 2019</span>
            </h5>
            <p className="uk-text-muted uk-margin-remove font14">
              MBA from Harvard Business School
            </p>
          </section>
        </section>
        <section className="Data-container right">
          <section id="target"></section>
          <section className="contents">
            <h5 className="uk-margin-remove font18 book-family">
              Toms College <span className="uk-text-muted font14">2011 - 2015</span>
            </h5>
            <p className="uk-text-muted uk-margin-remove font14">
              Bachlors in Fine Arts
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Timeline;
