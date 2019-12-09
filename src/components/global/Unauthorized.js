import SEO from "../../../next-seo.config";
import {DefaultSeo} from "next-seo";

function Unauthorized() {
  return (
    <main id="unauthorized">
      <DefaultSeo {...Object.assign(SEO, {
        title: "Unauthorized",
      })}
      />
      <img src="/images/illustrations/access-denied.jpg" />
    </main>
  );
}

export default Unauthorized;
