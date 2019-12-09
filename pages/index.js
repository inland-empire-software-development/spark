import {NextSeo} from 'next-seo';
import Link from "next/link";

function Home() {
  return (
    <div className="uk-container uk-margin-large-top">
      <NextSeo
        config={{
          title: "Authenticate",
        }}
      />
      <section>
        <p>Home</p>
        <Link href="/auth">
          <a>Log in</a>
        </Link>
      </section>
    </div>
  );
}

export default Home;
