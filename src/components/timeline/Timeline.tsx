import "./Timeline.scss";
// render timeline page.
function Timeline(): JSX.Element {
  return (
    <section id="timeline" className="uk-padding-small">
      <h2 className="font20 uk-text-bold">My Education</h2>
      <section className="timeline uk-width-3-3">
        <section className="container right ">
          <section id="target"></section>
          <section className="contents uk-remove-padding">
            <h5 className="uk-margin-remove">Harvard University <span className="uk-text-muted">2015 - 2019</span></h5>
            <p className="uk-text-muted uk-margin-remove">
              MBA from Harvard Business School
            </p>
          </section>
        </section>
        <section className="container right">
          <section id="target"></section>
          <section className="contents">
            <h5 className="uk-margin-remove">Toms College <span className="uk-text-muted">2011 - 2015</span></h5>
            <p className="uk-text-muted uk-margin-remove">
              Bachlors in Fine Arts
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Timeline;
