import React, {useContext} from "react";
import {Context} from '../../../context';

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
  const context = useContext(Context);

  // state for clicked (active) and hovered (mouse hover to show submenu)
  // dashboard links
  const [activeItemLabel, setActiveItemLabel] = React.useState<string>("");
  const [activeSubMenus, setActiveSubMenus] = React.useState<ActiveSubMenus>(new Map());
  const [scrollTop, setScrollTop] = React.useState<number>(80);

  const handleScroll = () => {
    if (window.scrollY < 80) {
      setScrollTop(80-window.scrollY);
    } else {
      setScrollTop(0);
    }
  };

  // For sticky sidebar that works with 80 px navbar
  // TODO - allow for different navbar heights by adding a prop
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // for initial load
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuItemClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: SidebarItem) => {
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
    // only call if there is no submenu
    if (!item.subItems) {
      props.onNavigate(item.path);
    }
    // set main item active styles
    setActiveItemLabel(item.label);
  };

  const handleSubMenuItemClicked = (path: string) => {
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

      // for primary menu (top level items)
      const isActiveItem = activeItemLabel === item.label;
      const subMenuHeight = activeSubMenus.get(item.label);
      const hasSubMenu = subMenuHeight ? true : false;

      // create subitem JSX if subItems exist
      const subItems: JSX.Element | undefined = item.subItems && item.subItems.length > 0 ? (
        <div
          className="menu-secondary"
          style={{height: subMenuHeight ? subMenuHeight : 0}}
        >
          <ul className="uk-nav-sub">
            {item.subItems.map((subItem) => (
              <li
                key={subItem.label}
                onClick={() => handleSubMenuItemClicked(subItem.path)}
              >{subItem.label}</li>
            ))}
          </ul>
        </div>
      ): undefined;


      // return main items with dropdown for subitems
      return (
        <li
          key={item.label}
          className={`${subItems ? "uk-parent":""} menu-item-primary`}
        >
          <div
            className={`primary-item-label ${isActiveItem ? "active": ""}`}
            onClick={(e) => handleMenuItemClicked(e, item)}>
            <i className={iconStyle}></i>
            <span>
              {item.label}
            </span>
            {item.subItems && item.subItems.length > 0 && (
              <span
                className="sub-angle-down"
                style={{transform: hasSubMenu ? "rotate(180deg)": ""}}
                uk-icon="icon: chevron-down"></span>
            )}
          </div>
          {subItems}
        </li>
      );
    });
  };

  const navLinks = createMenuItems(props.menuItems);
  const accountLinks = createMenuItems(props.accountMenuItems);

  // return whole sidebar with offcanvas capability for toggling on/off screen
  return (
    <aside id="sidebar-container" className={`${context.sidebarIsOpen ? "open" : ""}`}>
      <div className="sidebar-panel" style={{top: scrollTop}}>
        <ul
          className="uk-nav menu-primary">
          {navLinks}

          <div className="section-title">Account</div>
          {accountLinks}
        </ul>
      </div>

    </aside>
  );
};

export default Sidebar;
