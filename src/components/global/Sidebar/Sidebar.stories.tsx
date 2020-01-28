import * as React from "react";
import {withA11y} from "@storybook/addon-a11y";
import "../../../style/index.scss";
import Sidebar from "./Sidebar";

export default {
  title: 'Sidebar',
  decorators: [withA11y],
  excludeStories: /.*Data$/,
};

export const mainItemsData = [
  {icon: "far fa-tachometer-alt-fastest", label: "Dashboard", subItems: [
    {label: "Overview", path: "/dashboard"},
    {label: "Updates", path: "/dashboard/updates"},
  ]},
  {icon: "far fa-users-class", label: "Courses"},
  {icon: "far fa-comment-alt-edit", label: "Lessons"},
  {icon: "far fa-comments-alt", label: "Messages"},
  {icon: "far fa-bookmark", label: "Bookmarks"},
  {icon: "far fa-heart", label: "Resources"},
  {icon: "far fa-users", label: "Community"},
];

export const accountItemsData = [
  {icon: "far fa-cog", label: "Settings"},
  {icon: "far fa-sign-out", label: "Logout"},
];

const missingIconData = [...mainItemsData];
missingIconData.push(
    {icon: "", label: "Nothing"},
);


export const DefaultSidebar = () =>
  <Sidebar menuItems={mainItemsData} accountMenuItems={accountItemsData} isOpen></Sidebar>;

export const MissingIcon = () =>
  <Sidebar menuItems={missingIconData} accountMenuItems={accountItemsData} isOpen></Sidebar>;

export const OffCanvas = () =>
  <Sidebar menuItems={mainItemsData} accountMenuItems={accountItemsData} isOpen={false}></Sidebar>;
