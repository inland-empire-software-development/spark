import React from "react";
import "./Sidebar.scss";

interface SidebarItem {
  icon: string;
  label: string;
  path: string;
  subItems?: SubItem[];
}

interface SubItem {
  label: string;
  path: string;
};

interface SidebarProps {
  menuItems: SidebarItem[];
  accountMenuItems: SidebarItem[];
  isOpen: boolean;
  onNavigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  // state for clicked (active) and hovered (mouse hover to show submenu)
  // dashboard links
  const [activeItemLabel, setActiveItemLabel] = React.useState<string>("");

  const handleItemClicked = (item: SidebarItem) => {
    // call props onNavigate function with route path
    props.onNavigate(item.path);
    // set main item active styles
    setActiveItemLabel(item.label);
  };

  const handleSubItemClicked = (path: string) => {
    // call props onNavigate function with route path
    props.onNavigate(path);
  };

  // createMenuItems is a helper to avoid repetition
  const createMenuItems = (menuItems: SidebarItem[]): JSX.Element[] => {
    return menuItems.map((item) => {
      // handle missing icon
      let iconStyle = `${item.icon} fa-fw icon`;
      if (!item.icon || item.icon.length === 0) {
        iconStyle = "fa fa-fw icon icon-hidden";
      }

      const subItems: JSX.Element | undefined = item.subItems && item.subItems.length > 0 ? (
        <ul className="uk-nav-sub">
          {item.subItems.map((subItem) => (
            <li key={subItem.label}>{subItem.label}</li>
          ))}
        </ul>
      ): undefined;

      // create return main item with dropdown for subitems
      return (
        <li
          key={item.label}
          className={`uk-parent ${activeItemLabel === item.label ? "active": ""}`}
          onClick={() => handleItemClicked(item)}>
          <span>
            <i className={iconStyle}></i> {item.label}
          </span>
          {subItems}
        </li>
      );
    });
  };

  const navLinks = createMenuItems(props.menuItems);
  const accountLinks = createMenuItems(props.accountMenuItems);

  return (
    <div
      className={`uk-offcanvas ${props.isOpen ? "uk-open" : ""}`}
      style={{display: "block"}}>
      <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide sidebar-panel">
        <ul className="uk-nav uk-nav-parent-icon" data-uk-nav="multiple:true;toggle:>span">
          {navLinks}

          <div className="section-title">Account</div>
          {accountLinks}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
