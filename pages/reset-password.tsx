import Redirect from "../src/components/animation/Redirect";
// import {NextSeo} from "next-seo";
import {useState, useEffect, FormEvent} from "react";
import notify from "../src/components/utility/Notify";
import Password from "../src/components/authenticate/Password/Password";
import Link from "next/link";
import Spinner from "../src/components/global/Spinner/Spinner";

/**
 * Check provided input - reset account password if valid.
 * @param {any} props
 * @return {void} checks validity of input provided.
 */
function ResetPassword(props: any) {
  const {query} = props;
  const {user, token, email, action} = query;
  const url = 'api/authenticate/reset';
  const [confirmation, setConfirmation] = useState({
    status: undefined,
    message: undefined,
  });

  useEffect(() => {
    if (user && token && email && action && confirmation.status === undefined) {
      fetch(process.env.HOST + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...query,
          action: "verify",
        }),
      })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);

            if (response.status) {
              notify({
                message: response.message,
                status: 'success',
                pos: 'top-left',
                timeout: 5000,
              });
            } else {
              notify({
                message: response.message,
                status: 'danger',
                pos: 'top-left',
                timeout: 5000,
              });
            }

            setConfirmation(response);
          })
          .catch((error) => {
            notify({
              message: error.message,
              status: 'danger',
              pos: 'top-left',
              timeout: 5000,
            });
          });
    }
  }, []);

  function handlePasswordReset(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const spinner: HTMLElement | null = document.getElementById('spinner');

    if (spinner) spinner.classList.remove('uk-hidden');

    const password = document.querySelector('[name="password-component"]') as HTMLInputElement;

    if (user && token && email && action && confirmation.status && password.value !== undefined) {
      fetch(process.env.HOST + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...query,
          token,
          action: "reset",
          password: password.value,
        }),
      })
          .then((response) => response.json())
          .then((response) => {
            const {status, message} = response;

            notify({
              message: message,
              status: status ? 'success' : 'danger',
              pos: 'top-left',
              timeout: 7000,
            });

            setConfirmation(Object.assign(confirmation, {
              status: true,
              message: "Password changed!",
            }));

            if ((process as any).browser) {
              setTimeout(() => {
                location.search = '';
              }, 3000);
            }
          });
    }
  }

  // only render page if user, token found in query
  if (user && token && email && action) {
    return (
      <div className="uk-container uk-margin-large-top">
        {confirmation.status &&
          (
            <div id="login-container" className="uk-section uk-flex uk-flex-middle uk-animation-fade">
              <Spinner ratio={3} classes="uk-hidden"/>
              <form onSubmit={(event) => handlePasswordReset(event)}>
                <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
                  <p>Please provide us with your new password. Your new password must meet minimum requirements.</p>
                  <input className="uk-hidden" type="text" name="username" autoComplete="username"/>
                  <Password/>
                  <p className="uk-text-center"><small>Double check your new password!</small></p>
                  <button className="uk-button bg-primary black uk-button-large uk-width-1-1">Reset Password</button>
                </div>
              </form>
            </div>
          )
        }
        {!confirmation.status && confirmation.status !== undefined &&

          <div>
            <h1 className="primary">Password Reset</h1>
            <p className="uk-text-bolder">Check your email.</p>
            <p className="subtitle-text">
                You should have received an email to verify your password reset request.
            </p>
            <p>
                Confirm that you received the email and then try logging in to
                your account with your new password.
            </p>
            {confirmation.message &&
              <p>
                System message: {confirmation.message}
              </p>
            }
            <Link href="/authenticate">
              <a>
                  Go to Log In page
              </a>
            </Link>
          </div>
        }
      </div>
    );
  } else {
    setTimeout(()=> {
      if (document) {
        document.location.href = "/authenticate";
      }
    }, 3000);
    return (
      <Redirect/>
    );
  }
}

ResetPassword.getInitialProps = ({query}: any) => {
  return {query};
};

export default ResetPassword;
