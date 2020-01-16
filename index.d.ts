import {Component} from "react";

export interface CreateTable {
    createTable: (TableName: string, Query: string) => Function;
}
export interface Message {
    status: boolean;
    message: string;
}

export interface Request {
    body: {
        [property: string]: string;
      };
    query: any; // TODO: find a better type.
    cookies: any; // TODO: find a better
}

export interface Response {
    writeHead(statusCode: number, headers: { [properties: string]: string });
    send: (result: any | { message: string }) => void;
    status: (status: number) => void;
    setHeader: (header: string, value: string | Array) => void;
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
    user: string | undefined;
    access: boolean;
    redirect: string | undefined;
    isPublic: boolean;
}
