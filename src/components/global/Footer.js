function Footer(props) {
  const {stick = false} = props;
  return (
    <footer className={`uk-margin-top uk-text-center uk-padding-small ${stick ? "stick" : ""}`} >
      <p className="uk-text-small uk-margin-remove-bottom">© 2019 authenticate.</p>
      <p className="uk-text-small uk-margin-remove-top">An open source NextJS project</p>
    </footer>
  );
}

export default Footer;
