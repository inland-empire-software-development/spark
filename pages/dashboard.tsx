import {useContext} from 'react';
import Context, {SidebarOptions} from '../src/context';
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import Sidebar from '../src/components/global/Sidebar/Sidebar';
import Navigation from '../src/components/global/Navigation/Navigation';

function Dashboard() {
  const {user} = useContext(Context);
  const {account, open, main} = SidebarOptions; // TODO: add ability to save data into DB and retrieve for menu generaetion

  const onNavigate = (path: string) => {
    // can pass the router here
    console.log(`Navigating to ${path}`);
  };

  const onMenuClose = () => {
    // call method on on context, or add useState to manage open state
    console.log('Close menu');
  };

  return (
    <main>
      <Navigation/>
      <section>
        <Sidebar
          accountMenuItems={account}
          menuItems={main}
          isOpen={open}
          closeButtonScreenSize={"l"}
          onNavigate={(path) => onNavigate(path)}
          onMenuClose={() => onMenuClose()}
        />
        <div className="uk-container" >
          <section className="uk-padding">
            <h1>Hello {user}!</h1>
          </section>
        </div>
      </section>
      <DefaultSeo {...Object.assign(SEO, {
        title: `${user} - dashboard`,
      })}
      />
    </main>
  );
}

export default Dashboard;
