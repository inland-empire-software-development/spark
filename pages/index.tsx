import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Footer from '../src/components/global/Footer/Footer';
import Navigation from "../src/components/global/Navigation/Navigation";
import Landing from '../src/components/landing/Landing';

// render home page.
function Home(): JSX.Element {
  return (
    <main>
      <Navigation />
      <section>
        <div className="uk-container" >
          <DefaultSeo {...Object.assign(SEO, {
            title: `Home`,
          })}
          />
          <section className="uk-padding">
            <Landing />
          </section>
        </div>
      </section>
      <Footer />
    </main>

  );
}

export default Home;
