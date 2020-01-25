import SEO from "../next-seo.config";
import {DefaultSeo} from "next-seo";
import Link from "next/link";
import Footer from '../src/components/global/Footer/Footer';
import Button from "../src/components/global/Button/Button";

// render home page.
function Home(): JSX.Element {
  return (
    <main>
      <section>
        <div className="uk-container" >
          <DefaultSeo {...Object.assign(SEO, {
            title: `Home`,
          })}
          />
          <section className="uk-padding">
            <p>Home</p>
            <Button label="Log in" href="/authenticate" />
          </section>
        </div>
      </section>
      <Footer/>
    </main>

  );
}

export default Home;
