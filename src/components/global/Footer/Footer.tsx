import React from "react";
import './Footer.scss';

function Footer(): JSX.Element {
  const date = new Date();
  return (
    <footer className={`uk-margin-top uk-text-center uk-padding-small stick`} >
      <p className="uk-text-small uk-margin-remove-top uk-margin-remove-bottom">© {date.getFullYear()} Spark.</p>
      <p className="uk-text-small uk-margin-remove-top uk-margin-remove-bottom">An open source LMS project</p>
    </footer>
  );
}

export default Footer;
