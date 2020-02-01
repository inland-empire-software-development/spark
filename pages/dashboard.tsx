import {useContext} from 'react';
import Context, {SidebarOptions} from '../src/context';
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import Sidebar from '../src/components/global/Sidebar/Sidebar';
function Dashboard() {
  const {user} = useContext(Context);
  const {account, open, main} = SidebarOptions; // TODO: add ability to save data into DB and retrieve for menu generaetion

  return (
    <main>
      <Sidebar accountMenuItems={account} menuItems={main} isOpen={open} />

      <DefaultSeo {...Object.assign(SEO, {
        title: `${user} - dashboard`,
      })}
      />
      <h1>Hello {user}!</h1>
    </main>
  );
}

export default Dashboard;
