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
  activePath: string | undefined;
  onNavigate: (path: string) => void;
}

// ActiveSubMenus holds a Map of primary menu items with expanded submenu heights as values
type ActiveSubMenus = Map<string, number>;

const Sidebar: React.FC<SidebarProps> = (props) => {
  const context = useContext(Context);
  // state for clicked (active) and hovered (mouse hover to show submenu)
  // dashboard links

  // initialize active submenu items from context
  const [activeSubMenus, setActiveSubMenus] = React.useState<ActiveSubMenus>(context.activeDashboardMenus);

  // TODO - using fixed 80 px navbar. Allow accessing from prop
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
      context.setContextProperty({
        activeDashboardMenus: activeSubMenus,
      });
      props.onNavigate(item.path);
    }
  };

  const handleSubMenuItemClicked = (path: string) => {
    // store the expanded menus in context
    context.setContextProperty({
      activeDashboardMenus: activeSubMenus,
    });
    // call function in parent to navigate
    props.onNavigate(path);
  };

  const handleCloseSidebar = () => {
    context.setContextProperty({sidebarIsOpen: false});
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
      const isActiveItem = props.activePath?.split("/")[1] === item.path.split("/")[1];
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
      <div
        className={`sidebar-panel ${context.sidebarIsOpen ? "open" : ""}`}
        style={{top: scrollTop}}>
        <div className="scroll-content">
          <div className="close-button">
            <span
              uk-icon="icon: close; ratio: 1.2"
              onClick={() => handleCloseSidebar()}
            ></span>
          </div>
          <ul
            className="uk-nav menu-primary">
            {navLinks}

            <div className="section-title">Account</div>
            {accountLinks}
          </ul>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
