import * as React from "react";
import {withA11y} from "@storybook/addon-a11y";
import {action} from "@storybook/addon-actions";
import {withKnobs, boolean} from "@storybook/addon-knobs";
import "../../../style/index.scss";
import Sidebar from "./Sidebar";
import marked from "marked";

const usage = require('./usage.md');


export default {
  title: "Sidebar",
  decorators: [withA11y, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    notes: {
      "Usage": marked(usage.default),
    },
  },
};

export const mainItemsData = [
  {
    icon: "far fa-tachometer-alt-fastest",
    label: "Dashboard",
    path: "/dashboard",
    subItems: [
      {label: "Overview", path: "/dashboard"},
      {label: "Updates", path: "/dashboard/updates"},
    ],
  },
  {
    icon: "far fa-users-class",
    label: "Courses",
    path: "/courses",
    subItems: [
      {label: "All Courses", path: "/courses"},
      {label: "Add Course", path: "/courses/add"},
      {label: "Category", path: "/courses/categories"},
      {label: "Tags", path: "/courses/tags"},
      {label: "Manage", path: "/courses/manage"},
    ],
  },
  {icon: "far fa-comment-alt-edit", label: "Lessons", path: "/lessons"},
  {icon: "far fa-comments-alt", label: "Messages", path: "/messages"},
  {icon: "far fa-bookmark", label: "Bookmarks", path: "/bookmarks"},
  {icon: "far fa-heart", label: "Resources", path: "/resources"},
  {icon: "far fa-users", label: "Community", path: "/community"},
];

export const accountItemsData = [
  {
    icon: "far fa-cog",
    label: "Settings",
    path: "/settings",
    subItems: [
      {label: "Profile", path: "user/profile"},
      {label: "Preferences", path: "user/preferences"},
      {label: "Account", path: "user/account"},
    ],
  },
  {icon: "far fa-sign-out", label: "Logout", path: "/logout"},
];

const missingIconData = [...mainItemsData];
missingIconData.push({icon: "", label: "Nothing", path: ""});

const actionsData = {
  onNavigate: action("onNavigate"),
};

export const DefaultSidebar = () => (
  <Sidebar
    menuItems={mainItemsData}
    accountMenuItems={accountItemsData}
    isOpen={boolean("Visible?", true, "Toggles")}
    activePath={undefined}
    {...actionsData}
  ></Sidebar>
);

export const MissingIcon = () => (
  <Sidebar
    menuItems={missingIconData}
    accountMenuItems={accountItemsData}
    isOpen={boolean("Visible?", true, "Toggles")}
    activePath={undefined}
    {...actionsData}
  ></Sidebar>
);

export const CloseButtonOnSmallScreen = () => (
  <Sidebar
    menuItems={missingIconData}
    accountMenuItems={accountItemsData}
    isOpen={boolean("Visible?", true, "Toggles")}
    activePath={undefined}
    {...actionsData}
  ></Sidebar>
);

