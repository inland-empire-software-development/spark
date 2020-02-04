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
  const [hoveredItemLabel, setHoveredItemLabel] = React.useState<string>("");

  // the following state is used to tracking the absolute position of the submenu
  const [subMenuCoordinates, setSubMenuCoordinates] = React.useState<[number, number]>([0, 0]);

  // useEffect for handling navigation toggle

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

  const handleMouseEnterItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, itemLabel: string) => {
    setHoveredItemLabel(itemLabel);
    setSubMenuCoordinates([event.currentTarget.offsetTop, event.currentTarget.offsetLeft + event.currentTarget.offsetWidth]);
  };

  const handleMouseLeaveItem = () => {
    setHoveredItemLabel("");
  };

  // createMenuItems is a helper to avoid repetition
  const createMenuItems = (menuItems: SidebarItem[]): JSX.Element[] => {
    return menuItems.map((item) => {
      // handle missing icon
      let iconStyle = `${item.icon} fa-fw icon`;
      if (!item.icon || item.icon.length === 0) {
        iconStyle = "fa fa-fw icon icon-hidden";
      }
      return (
        <li
          key={item.label}
          className={activeItemLabel === item.label ? "active": ""}
          onClick={() => handleItemClicked(item)}
          onMouseEnter={(event) => handleMouseEnterItem(event, item.label)}
          onMouseLeave={() => handleMouseLeaveItem()}>
          <i className={iconStyle}></i>
          {item.label}
        </li>
      );
    });
  };

  // position submenu based on coordinates of currently hovered on menuItem
  const createSubMenu = (menuItems: SidebarItem[]): JSX.Element => {
    // choose hovered on item
    const selected = menuItems.find((item) => item.label === hoveredItemLabel);
    let subMenuHidden = true;
    let subMenuItems: JSX.Element[] = [];
    let label = "";
    if (selected && selected.subItems && selected.subItems.length > 0) {
      subMenuHidden = false;
      subMenuItems = selected.subItems.map((subItem) => (
        <li key={subItem.label} onClick={() => handleSubItemClicked(subItem.path)}>{subItem.label}</li>
      ));
      label = selected.label;
    }

    return (
      <div className="sidebar-sub-menu" style={{
        position: "absolute",
        top: subMenuCoordinates[0],
        left: subMenuCoordinates[1],
        opacity: subMenuHidden ? 0 : 1,
        visibility: subMenuHidden ? "hidden" : "visible",
      }}
      onMouseEnter={() => setHoveredItemLabel(label)}
      onMouseLeave={() => handleMouseLeaveItem()}>
        <ul>
          {subMenuItems}
        </ul>
      </div>
    );
  };

  const navLinks = createMenuItems(props.menuItems);
  const accountLinks = createMenuItems(props.accountMenuItems);
  const subMenu = createSubMenu([...props.menuItems, ...props.accountMenuItems]);
  const openClassName = props.isOpen ? "uk-open" : "";

  return (
    <div className={`uk-offcanvas ${openClassName}`} style={{display: "block"}}>
      <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide sidebar-panel">
        <ul className="uk-nav">
          {navLinks}

          <div className="section-title">Account</div>
          {accountLinks}
        </ul>
      </div>
      {subMenu}
    </div>
  );
};

export default Sidebar;
