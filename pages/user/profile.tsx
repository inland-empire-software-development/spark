import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import Footer from '../../src/components/global/Footer/Footer';
import Navigation from "../../src/components/global/Navigation/Navigation";

// render Profile page.
function Profile(): JSX.Element {
  return (
    <main>
      <Navigation />
      <section>
        <div className="uk-container" >
          <DefaultSeo {...Object.assign(SEO, {
            title: `Profile`,
          })}
          />
          <section className="uk-padding">
            <p>just a test 2 </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>

  );
}

export default Profile;
