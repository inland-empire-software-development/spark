import Link from 'next/link';

function LoggedOut() {
  return(
      <section className="uk-container uk-margin-large-top">
        <div className="uk-panel">
          <p className="heading uk-margin-remove-bottom">You are now logged out</p>
          <p className="uk-margin-remove-top">
            Click <Link href="/auth">
            <a>here</a>
          </Link> to return to the login page.
          </p>
        </div>
      </section>
  )
}

export default LoggedOut;
