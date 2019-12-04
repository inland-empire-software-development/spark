import {useState, useEffect} from "react";
import fetch from "isomorphic-unfetch";
import Unauthorized from "../../global/Unauthorized";
import Router from "next/router";
import Spinner from "../../global/Spinner";

const AuthWrapper = (WrappedComponent) => (props) => {
  const {children, reverse = false, url = "/dashboard"} = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [access, setAccess] = useState(undefined);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // API route that will handle signing in
    const url = "/api/auth";

    fetch(url, {
      method: "GET",
    })
        .then((response) => response.json())
        .then((state) => {
          setAccess(state.access);
        });
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

    if (access === undefined) return <Spinner/>;

    // if logged in but reverse is false - render
    // if logged out but reverse is true, render
    if ((access && !reverse) || (!access && reverse) ) return content;

    // if you have access and reverse is set to true,
    // redirect - default = dashboard
    if (access && reverse) {
      Router.push(url);
      return <Spinner/>;
    }

    // user is not authorized
    if (!access && !reverse) return <Unauthorized/>;
  };

  return (renderContent(props));
};

export default AuthWrapper;
