import {useContext} from 'react';
import Context, {SidebarOptions} from '../src/context';
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import Sidebar from '../src/components/global/Sidebar/Sidebar';
import Navigation from '../src/components/global/Navigation/Navigation';
import Container from '../src/components/dashboard/Container/Container';
import Page from '../src/components/dashboard/Page/Page';
import Breadcrumb from '../src/components/dashboard/Breadcrumb/Breadcrumb';

function Dashboard() {
  const {user} = useContext(Context);
  const {account, open, main} = SidebarOptions; // TODO: add ability to save data into DB and retrieve for menu generaetion

  return (
    <main>
      <DefaultSeo {...Object.assign(SEO, {
        title: `${user} - dashboard`,
      })}
      />
      <Navigation/>
      <Page content={
        (<div className="w-100">
          <Sidebar accountMenuItems={account} menuItems={main} isOpen={open} />
          <Container content={
            <div className="w-100">
              <Breadcrumb />
            </div>
          }/>
        </div>) as JSX.Element
      } />


      <h1>Hello {user}!</h1>
    </main>
  );
}

export default Dashboard;
