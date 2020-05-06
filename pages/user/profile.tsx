import SEO from "../../next-seo.config";
import {DefaultSeo} from "next-seo";
// import Footer from '../../src/components/global/Footer/Footer';
import Navigation from "../../src/components/global/Navigation/Navigation";
import Profile from "../../src/components/profile/profile";

// render Profile page.
function ProfilePage(): JSX.Element {
  return (
    <main>
      <Navigation />
      <DefaultSeo
        {...Object.assign(SEO, {
          title: `Profile`,
        })}
      />
      <Profile />
      {/* <Footer /> */}
    </main>
  );
}

export default ProfilePage;
