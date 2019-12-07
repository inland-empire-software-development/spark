function Footer() {
  return (
    <footer className="uk-section bg-dark-gray offwhite uk-padding-remove-bottom uk-position-bottom">
      <div className="uk-container">
        <div className="uk-grid uk-grid-large" data-uk-grid="true">
          <div className="uk-width-1-2@m uk-first-column">
            <img className="footer-logo" src="/icon/spark-text-offwhite.svg"/>
            <p>Spark is a digital skills initiative led by Inland Empire Software Development, Inc. Our program is
                scholarship based and designed by industry professionals. If you want more information, you can reach us
                at <a href="mailto:community@iesd.com" title="">community@iesd.com</a></p>
          </div>
        </div>
      </div>

      <div className="uk-text-center uk-padding uk-padding-remove-horizontal">
        <span className="uk-text-small uk-text-muted">© 2019 Spark - an Inland Empire Software Development, Inc. program.</span>
      </div>
    </footer>
  );
}

export default Footer;
