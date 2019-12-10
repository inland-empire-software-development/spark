import {NextSeo} from 'next-seo';
import Link from "next/link";
import Footer from '../src/components/global/Footer';

function Home() {
  return (
    <>
      <div className="uk-container uk-margin-large-top">
        <NextSeo
          config={{
            title: "Authenticate",
          }}
        />
        <section>
          <p>Home</p>
          <Link href="/auth">
            <button className="uk-button">Log in</button>
          </Link>
        </section>
      </div>
      <Footer/>
    </>

  );
}

export default Home;
