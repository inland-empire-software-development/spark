import React from "react";
// render InfoCard page.
function InfoCard(): JSX.Element {
  return (
    <section id="infoCard" className="uk-container">
      <section className="grid">
        <section className="uk-width-1-1 uk-align-center borderCard uk-card uk-card-body uk-margin-medium">
          <h2 className="uk-card-title uk-text-bolder meduim-text uk-margin-small font20 medium-family">
            Contact
          </h2>
          <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font14  medium-family">
            Phone Number
          </h4>
          <p className=" uk-text-bolder book-text uk-margin-remove font18 book-family">
            +19511234567
          </p>
          <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font14 medium-family ">
            Email
          </h4>
          <p className=" uk-text-bolder book-text uk-margin-remove font18 book-family">
            andymendez@iesd.com
          </p>
          <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font14 medium-family ">
            Slack
          </h4>
          <p className=" uk-text-bolder book-text uk-margin-remove font18 book-family">
            @andymendez100
          </p>
          <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font14 medium-family ">
            Social Media
          </h4>
        </section>
        <section className="uk-width-1-1 uk-align-center borderCard uk-card uk-card-body uk-margin-medium">
          <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font16 medium-family ">
            Courses
          </h4>
          <p className=" uk-text-bolder book-text uk-margin-remove font14 book-family">
            Intro to Web development
          </p>
          <p className=" uk-text-bolder book-text uk-margin-remove font14 book-family">
            Backend development
          </p>
          <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font16 medium-family ">
            Positions Interested In
          </h4>
          <p className=" uk-text-bolder book-text uk-margin-remove font14 book-family">
            Front end developmer
          </p>
          <p className=" uk-text-bolder book-text uk-margin-remove font14 book-family">
            Backend developmer
          </p>
          <h4 className="meduimP-text smallPadingTop uk-margin-small-bottom uk-text-muted font16 medium-family ">
            Open to Interview
          </h4>
          <p className=" uk-text-bolder book-text uk-margin-remove font14 book-family">
            Yes
          </p>
        </section>
      </section>
    </section>
  );
}

export default InfoCard;
