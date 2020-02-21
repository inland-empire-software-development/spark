import {useContext} from 'react';
import {Context, SidebarOptions} from '../src/context';
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import Sidebar from '../src/components/global/Sidebar/Sidebar';
import Navigation from '../src/components/global/Navigation/Navigation';

function Dashboard() {
  const context = useContext(Context);
  const {user, sidebarIsOpen} = context;
  const {account, main} = SidebarOptions; // TODO: add ability to save data into DB and retrieve for menu generaetion

  const onNavigate = (path: string) => {
    context.setContextProperty({
      activeDashboardPath: path,
    });
  };

  return (
    <main>
      <Navigation/>
      {/* // TODO: Need to make it so we just need to call <Sidebar> - low priority. */}
      <Sidebar
        accountMenuItems={account}
        menuItems={main}
        isOpen={sidebarIsOpen}
        onNavigate={(path) => onNavigate(path)}
      />
      <div className="uk-container" >
        <section className="uk-padding">
          <h1>Hello {user}!</h1>
        </section>
      </div>
      <DefaultSeo {...Object.assign(SEO, {
        title: `${user} - dashboard`,
      })}
      />
    </main>
  );
}

export default Dashboard;
