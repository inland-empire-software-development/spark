import React, {useState, useEffect} from "react";
import auth from "../../../lib/auth";
import fetch from "isomorphic-unfetch";
import Unauthorized from "../../global/Unauthorized";
import Router from "next/router";

const AuthWrapper = (WrappedComponent) => (props) => {
  const {children, reverse = false, url = "/dashboard"} = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [access, setAccess] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // API route that will handle signing in
    const url = "/api/auth";
    const {token, user} = auth.getInfo();

    if (token && user) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user, token}),
      })
          .then((response) => response.json())
          .then((state) => {
            setAccess(state.access);
          });
    }
  }, []);

  const renderContent = (props) => {
    const content = (
      <div>
        <WrappedComponent {...props}>
          {children}
        </WrappedComponent>
      </div>
    );

    console.log(access, reverse);
    // if logged in but reverse is false - render
    // if logged out but reverse is true, render
    if ((access && !reverse) || (!access && reverse) ) return content;

    // if you have access and reverse is set to true,
    // redirect - default = dashboard
    if (access && reverse) {
      return Router.push(url);
    }

    // user is not authorized
    if (!access && !reverse) return <Unauthorized/>;
  };

  return (renderContent(props));
};

export default AuthWrapper;
