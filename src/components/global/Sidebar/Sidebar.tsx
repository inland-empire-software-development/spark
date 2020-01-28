import React from "react";
import "./Sidebar.scss";

interface SidebarItem {
  icon: string;
  label: string;
  path: string;
}

interface SidebarProps {
  navLinks: SidebarItem[];
  accountNavLinks: SidebarItem[];
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const navLinks = props.navLinks.map((item) => (
    <li key={item.label}>
      <i className={`${item.icon} icon`}></i>
      <span>{item.label}</span>
    </li>
  ));

  const accountLinks = props.accountNavLinks.map((item) => (
    <li key={item.label}>
      <i className={`${item.icon} icon`}></i>
      <span>{item.label}</span>
    </li>
  ));

  return (
    <div className="sidebar-panel">
      <ul className="uk-nav uk-nav-side">
        {navLinks}

        <h3>Account</h3>
        {accountLinks}
      </ul>
    </div>
  );
};

export default Sidebar;
