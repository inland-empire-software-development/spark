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

// ActiveSubMenus holds a Map of primary menu items with expanded submenu heights as values
type ActiveSubMenus = Map<string, number>;

const Sidebar: React.FC<SidebarProps> = (props) => {
  // state for clicked (active) and hovered (mouse hover to show submenu)
  // dashboard links
  const [activeItemLabel, setActiveItemLabel] = React.useState<string>("");
  const [activeSubMenus, setActiveSubMenus] = React.useState<ActiveSubMenus>(new Map());

  const handleItemClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: SidebarItem) => {
    // check for sibling element (submenu)
    if (e.currentTarget.nextElementSibling?.firstElementChild) {
      const subMenuEl = e.currentTarget.nextElementSibling.firstElementChild;
      // open or close the primary item's submenu
      if (activeSubMenus.has(item.label)) {
        activeSubMenus.delete(item.label);
        setActiveSubMenus(new Map(activeSubMenus));
      } else {
        activeSubMenus.set(item.label, subMenuEl.clientHeight);
        setActiveSubMenus(new Map(activeSubMenus));
      }
    }

    // call props onNavigate function with route path
    props.onNavigate(item.path);
    // set main item active styles
    setActiveItemLabel(item.label);
  };

  // createMenuItems is a helper to avoid repetition
  const createMenuItems = (menuItems: SidebarItem[]): JSX.Element[] => {
    return menuItems.map((item) => {
      // handle missing icon
      let iconStyle = `${item.icon} fa-fw icon`;
      if (!item.icon || item.icon.length === 0) {
        iconStyle = "fa fa-fw icon icon-hidden";
      }

      // for primary menu (top level items)
      const isActiveItem = activeItemLabel === item.label;
      const subMenuHeight = activeSubMenus.get(item.label);

      const subItems: JSX.Element | undefined = item.subItems && item.subItems.length > 0 ? (
        <div
          className="menu-secondary"
          style={{height: subMenuHeight ? subMenuHeight : 0}}
        >
          <ul className="uk-nav-sub">
            {item.subItems.map((subItem) => (
              <li key={subItem.label}>{subItem.label}</li>
            ))}
          </ul>
        </div>
      ): undefined;


      // create return main item with dropdown for subitems
      // ${subItems ? "uk-parent":""}
      return (
        <li
          key={item.label}
          className={`${subItems ? "uk-parent":""} ${isActiveItem ? "active": ""} menu-item-primary`}
        >
          <div
            className="primary-item-label"
            onClick={(e) => handleItemClicked(e, item)}>
            <i className={iconStyle}></i> {item.label}
          </div>
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
        <ul
          className="uk-nav menu-primary">
          {navLinks}

          <div className="section-title">Account</div>
          {accountLinks}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
