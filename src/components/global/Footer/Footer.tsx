import React from "react";

function Footer(): JSX.Element {
  return (
    <footer className={`uk-margin-top uk-text-center uk-padding-small stick`} >
      <p className="uk-text-small uk-margin-remove-top uk-margin-remove-bottom">© 2019 authenticate.</p>
      <p className="uk-text-small uk-margin-remove-top uk-margin-remove-bottom">An open source NextJS project</p>
    </footer>
  );
}

export default Footer;
