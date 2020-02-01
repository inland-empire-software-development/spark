import {useContext} from 'react';
import Context from '../src/context';
// import Logout from '../src/components/authenticate/LogOut/LogOut';
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import AddCourse from '../src/components/dashboard/panels/AddCourse/AddCourse';

function Dashboard() {
  const {user} = useContext(Context);

  return (
    <div className="uk-container uk-margin-large-top">
      <DefaultSeo {...Object.assign(SEO, {
        title: `${user} - dashboard`,
      })}
      />
      {/* <h1>Hello {user}!</h1> */}
      <AddCourse/>
      {/* <Logout/> */}
    </div>
  );
}

export default Dashboard;
