import {Redirects} from "..";

const redirects: Redirects = {
  "/": {redirect: undefined},
  "/welcome": {redirect: "/dashboard"},
  "/confirmation": {redirect: "/dashboard"},
  "/logged-out": {redirect: "/dashboard"},
  "/authenticate": {redirect: "/dashboard"},
};

const unprotected: Array<string> = ["/", "/authenticate", "/logged-out", "/welcome", "/confirmation", "/reset-password", "/test/"];

export {redirects, unprotected};
