import SEO from "../../next-seo.config";
import {DefaultSeo} from "next-seo";
// import Footer from '../../src/components/global/Footer/Footer';
import Navigation from "../../src/components/global/Navigation/Navigation";
import Title from "../user/title";
import Summary from "../user/summary";
import Slider from "../../src/components/slider/Slider";

// render Profile page.
function Profile(): JSX.Element {
  return (
    <main>
      <Navigation />
      <section id="profile">
        <section className="container-full">
          <section className="grid">
            <DefaultSeo
              {...Object.assign(SEO, {
                title: `Profile`,
              })}
            />
            <Title />
            <Summary />
          </section>
          <Slider />
        </section>
      </section>
      {/* <Footer /> */}
    </main>
  );
}

export default Profile;
