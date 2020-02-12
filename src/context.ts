import {createContext} from 'react';
import {MyAppContext} from '../';

export const SidebarOptions = {
  main: [
    {icon: "far fa-tachometer-alt-fastest", label: "Dashboard", path: "/dashboard", subItems: [
      {label: "Overview", path: "/dashboard"},
      {label: "Updates", path: "/dashboard/updates"},
    ]},
    {icon: "far fa-users-class", label: "Courses", path: "/courses", subItems: [
      {label: "All Courses", path: "/courses"},
      {label: "Add Course", path: "/courses/add"},
      {label: "Category", path: "/courses/categories"},
      {label: "Tags", path: "/courses/tags"},
      {label: "Manage", path: "/courses/manage"},
    ]},
    {icon: "far fa-comment-alt-edit", label: "Lessons", path: "/lessons"},
    {icon: "far fa-comments-alt", label: "Messages", path: "/messages"},
    {icon: "far fa-bookmark", label: "Bookmarks", path: "/bookmarks"},
    {icon: "far fa-heart", label: "Resources", path: "/resources"},
    {icon: "far fa-users", label: "Community", path: "/community"},
  ],
  account: [
    {icon: "far fa-cog", label: "Settings", path: "/settings", subItems: [
      {label: "Profile", path: "user/profile"},
      {label: "Preferences", path: "user/preferences"},
      {label: "Account", path: "user/account"},
    ]},
    {icon: "far fa-sign-out", label: "Logout", path: "/logout"},
  ],
  open: true,
  active: "/dashboard",
};

const defaultContext = {
  user: undefined,
  access: false,
  redirect: undefined,
  isPublic: false,
  userID: undefined,
};

const Context = createContext<MyAppContext>(defaultContext);

export default Context;
