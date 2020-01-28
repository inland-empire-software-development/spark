import React from "react";
import "./Sidebar.scss";

interface SidebarItem {
  icon: string;
  label: string;
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
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  // state for clicked (active) and hovered (mouse hover to show submenu)
  // dashboard links
  const [activeItemLabel, setActiveItemLabel] = React.useState<string>("");
  const [hoveredItemLabel, setHoveredItemLabel] = React.useState<string>("");

  const handleItemClicked = (itemLabel: string) => {
    setActiveItemLabel(itemLabel);
  };

  const handleMouseEnterItem = (itemLabel: string) => {
    setHoveredItemLabel(itemLabel);
  };

  const handleMouseLeaveItem = () => {
    setHoveredItemLabel("");
  };

  // createMenuItems is a helper to avoid repetition
  const createMenuItems = (menuLinks: SidebarItem[]): JSX.Element[] => {
    return menuLinks.map((item) => {
      // handle missingg icon
      let iconStyle = `${item.icon} fa-fw icon`;
      if (!item.icon || item.icon.length === 0) {
        iconStyle = "fa fa-fw icon icon-hidden";
      }
      return (
        <li
          key={item.label}
          className={activeItemLabel === item.label ? "active": ""}
          onClick={() => handleItemClicked(item.label)}
          onMouseEnter={() => handleMouseEnterItem(item.label)}
          onMouseLeave={() => handleMouseLeaveItem()}>
          <i className={iconStyle}></i>
          {item.label}
        </li>
      );
    });
  };

  const navLinks = createMenuItems(props.menuItems);
  const accountLinks = createMenuItems(props.accountMenuItems);

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
