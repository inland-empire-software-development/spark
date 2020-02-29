import {useContext} from 'react';
import {Context, SidebarOptions} from '../src/context';
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import Sidebar from '../src/components/global/Sidebar/Sidebar';
import Navigation from '../src/components/global/Navigation/Navigation';
import "../src/style/pages/_dashboard.scss";
import Panel from '../src/components/panel/Panel';
import Courses from '../src/components/courses/Courses';

function Dashboard() {
  const context = useContext(Context);
  const {user, sidebarIsOpen} = context;
  const {account, main} = SidebarOptions; // TODO: add ability to save data into DB and retrieve for menu generaetion

  const onNavigate = (path: string) => {
    context.setContextProperty({
      activeDashboardPath: path,
    });
  };

  // TODO: Create system to pull contents of correct panel based on context.

  return (
    <main>
      <Navigation/>
      {/* // TODO: Need to make it so we just need to call <Sidebar> - low priority. */}

      <div id="dashboard-container" className="uk-flex">
        <Sidebar accountMenuItems={account} menuItems={main} isOpen={sidebarIsOpen} onNavigate={(path) => onNavigate(path)} />

        <Panel>
          <>
            <Courses/>
          </>
        </Panel>

      </div>
      <DefaultSeo {...Object.assign(SEO, {
        title: `${user} - dashboard`,
      })}
      />
    </main>
  );
}

export default Dashboard;
