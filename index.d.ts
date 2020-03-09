import {Component} from "react";

export interface CreateTable {
    createTable: (TableName: string, Query: string) => Function;
}
export interface Message {
    status: boolean;
    message: string;
}

// Allow arrays to be indexed with strings
export interface ArrayIndexedWithStrings {
    [key: string]: any;
}

export interface Redirects {
    [page: string]: {
        redirect: string | undefined;
    };
}

export interface Notification extends UIkit.Notify {
    notification: Function;
  }

export default class NextAuthenticate extends Component<NextAuthenticateProps> { }

export interface MyAppContext {
    setContextProperty: function | undefined;
    user: string | undefined;
    sidebarIsOpen: boolean;
    notifications: boolean;
    activeDashboardPath: string | undefined;
    activeDashboardMenus: Map<string, number>;
    access: boolean;
    redirect: string | undefined;
    userID: string | undefined;
    isPublic: boolean;
}
