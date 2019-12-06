import Link from 'next/link';

function LoggedOut() {
  return(
      <section className="uk-container uk-margin-large-top">
        <div className="uk-panel">
          <p className="uk-margin-remove-bottom uk-text-success"><strong>You are now logged out</strong></p>
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
