import {useContext} from 'react';
import Context from '../src/context';
import Logout from '../src/components/authenticate/Logout';
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";

function Dashboard() {
  const {user} = useContext(Context);

  return (
    <div className="uk-container uk-margin-large-top">
      <DefaultSeo {...Object.assign(SEO, {
        title: `${user} - dashboard`,
      })}
      />
      <h1>Hello {user}!</h1>
      <Logout/>
    </div>
  );
}

export default Dashboard;
