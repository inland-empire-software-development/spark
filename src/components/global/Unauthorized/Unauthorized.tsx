import SEO from "../../../../next-seo.config";
import {DefaultSeo} from "next-seo";

function Unauthorized(): JSX.Element {
  return (
    <main id="unauthorized">
      <DefaultSeo {...Object.assign(SEO, {
        title: "Unauthorized",
      })}
      />
      <img src="/images/illustrations/forbidden.gif" />
    </main>
  );
}

export default Unauthorized;
