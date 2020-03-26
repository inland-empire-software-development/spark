// render InfoCard page.
function InfoCard(): JSX.Element {
  return (
    <section id="infoCard" className="uk-width-1-1">
      <section className="borderCard uk-card uk-card-body uk-margin-medium">
        <h2 className="uk-card-title uk-text-bolder meduim-text uk-margin-small font20">Contact</h2>
        <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font14  ">Phone Number</h4>
        <p className=" uk-text-bolder book-text uk-margin-remove font18">+19511234567</p>
        <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font14  ">Email</h4>
        <p className=" uk-text-bolder book-text uk-margin-remove font18">andymendez@iesd.com</p>
        <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font14  ">Slack</h4>
        <p className=" uk-text-bolder book-text uk-margin-remove font18">@andymendez100</p>
        <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font14  ">Social Media</h4>

      </section>
        <section className="borderCard uk-card uk-card-body uk-margin-medium">
        <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font16  ">Courses</h4>
        <p className=" uk-text-bolder book-text uk-margin-remove font14">Intro to Web development</p>
        <p className=" uk-text-bolder book-text uk-margin-remove font14">Backend development</p>
        <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font16  ">Positions Interested In</h4>
        <p className=" uk-text-bolder book-text uk-margin-remove font14">Front end developmer</p>
        <p className=" uk-text-bolder book-text uk-margin-remove font14">Backend developmer</p>
        <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font16  ">Open to Interview</h4>
        <p className=" uk-text-bolder book-text uk-margin-remove font14">Yes</p>

        </section>
    </section>

  );
}

export default InfoCard;
