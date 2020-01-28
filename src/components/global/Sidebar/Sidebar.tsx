import React from "react";
import "./Sidebar.scss";

interface SidebarItem {
  icon: string;
  label: string;
}

interface SidebarProps {
  navLinks: SidebarItem[];
  accountNavLinks: SidebarItem[];
  isOpen: boolean;
}

// createNavItems is a helper to avoid repetition
const createNavItems = (navLinks: SidebarItem[]): JSX.Element[] => {
  return navLinks.map((item) => {
    if (!item.icon || item.icon.length === 0) {
      return (
        <li key={item.label}>
          <i className={`fa fa-fw icon icon-hidden`}></i>
          {item.label}
        </li>
      );
    }
    return (
      <li key={item.label}>
        <i className={`${item.icon} fa-fw icon`}></i>
        {item.label}
      </li>
    );
  });
};

const Sidebar: React.FC<SidebarProps> = (props) => {
  const navLinks = createNavItems(props.navLinks);

  const accountLinks = createNavItems(props.accountNavLinks);

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
