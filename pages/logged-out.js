import Link from 'next/link';
import SEO from "../next-seo.config";
import {DefaultSeo} from "next-seo";

function LoggedOut() {
  return (
    <section className="uk-container uk-margin-large-top">
      <DefaultSeo {...Object.assign(SEO, {
        title: "Logged out",
      })}
      />
      <div className="uk-panel">
        <p className="uk-margin-remove-bottom"><strong>You are now logged out</strong></p>
        <p className="uk-margin-remove-top">
            Click <Link href="/auth">
            <a>here</a>
          </Link> to return to the login page.
        </p>
      </div>
    </section>
  );
}

export default LoggedOut;
