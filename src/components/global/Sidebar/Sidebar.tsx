import React from "react";
import "./Sidebar.scss";

interface SidebarItem {
  icon: string | null;
  label: string;
}

interface SidebarProps {
  navLinks: SidebarItem[];
  accountNavLinks: SidebarItem[];
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const navLinks = props.navLinks.map((item) => (
    <li key={item.label}>
      <i className={`${item.icon} fa-fw icon`}></i>
      {item.label}
    </li>
  ));

  const accountLinks = props.accountNavLinks.map((item) => (
    <li key={item.label}>
      <i className={`${item.icon} fa-fw icon`}></i>
      {item.label}
    </li>
  ));

  return (
    <div className={"sidebar-panel uk-offcanvas-bar" + (props.isOpen ? "uk-offcanvas-bar-show": "")}>
      <ul className="uk-nav uk-nav-side uk-nav-offcanvas">
        {navLinks}

        <div className="section-title">Account</div>
        {accountLinks}
      </ul>
    </div>
  );
};

export default Sidebar;
