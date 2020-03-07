import {useContext} from 'react';
import {useRouter} from 'next/router';
import {Context, SidebarOptions} from '../../context';
import {DefaultSeo} from "next-seo";
import SEO from "../../../next-seo.config";
import Sidebar from '../../components/global/Sidebar/Sidebar';
import Navigation from '../../components/global/Navigation/Navigation';
import "./DashboardLayout.scss";

const Dashboard: React.FC = function(props) {
  const context = useContext(Context);
  const router = useRouter();
  const {user, sidebarIsOpen} = context;
  const {children} = props;
  const {account, main} = SidebarOptions; // TODO: add ability to save data into DB and retrieve for menu generaetion

  const onNavigate = (path: string) => {
    context.setContextProperty({
      activeDashboardPath: path,
    });
    router.push(path);
  };

  const handleOpenSidebar = () => {
    context.setContextProperty({
      sidebarIsOpen: true,
    });
  };
  // TODO: Create system to pull contents of correct panel based on context.

  const menuToggleIcon = sidebarIsOpen ?
    null: (
      <div
        className="icon-button-container"
        onClick={() => handleOpenSidebar()}
      >
        <span className="icon-button-label">Menu</span>
        <span
          className="icon-button"
          uk-icon="icon: chevron-double-right;"
        ></span>
      </div>
    );

  return (
    <main>
      <Navigation/>
      {/* // TODO: Need to make it so we just need to call <Sidebar> - low priority. */}

      <div id="dashboard-container" className="uk-flex">
        <Sidebar
          accountMenuItems={account}
          menuItems={main}
          isOpen={sidebarIsOpen}
          activePath={context.activeDashboardPath}
          onNavigate={(path) => onNavigate(path)} />

        <div id="panel-container" >
          {menuToggleIcon}
          <div id="panel-content">
            {children}
          </div>
        </div>


      </div>
      <DefaultSeo {...Object.assign(SEO, {
        title: `${user} - dashboard`,
      })}
      />
    </main>
  );
};

export default Dashboard;
