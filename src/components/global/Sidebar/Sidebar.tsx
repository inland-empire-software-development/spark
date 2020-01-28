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

const Sidebar: React.FC<SidebarProps> = (props) => {
  const [activeItemLabel, setActiveItemLabel] = React.useState<string>("");

  // createNavItems is a helper to avoid repetition
  const createNavItems = (navLinks: SidebarItem[]): JSX.Element[] => {
    return navLinks.map((item) => {
      // build out the style
      let iconStyle = `${item.icon} fa-fw icon`;
      if (!item.icon || item.icon.length === 0) {
        iconStyle = "fa fa-fw icon icon-hidden";
      }
      return (
        <li
          key={item.label}
          className={activeItemLabel === item.label ? "active": ""}
          onClick={() => setActiveItemLabel(item.label)}>
          <i className={iconStyle}></i>
          {item.label}
        </li>
      );
    });
  };

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
