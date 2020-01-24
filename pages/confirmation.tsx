import {NextSeo} from "next-seo";
import {useEffect, useState} from 'react';
import notify from "../src/components/utility/Notify";
import Redirect from "../src/components/animation/Redirect/Redirect";

/**
 * Check provided input - activate account if valid.
 * @param {any} props
 * @return {void} checks validity of input provided.
 */
function Confirmation(props: any) {
  const {query} = props;
  const {user, token} = query;
  const url = 'api/validate/confirm';

  const [confirmation, setConfirmation] = useState(undefined);

  useEffect(() => {
    if (user && token) {
      fetch(process.env.HOST + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
          token,
        }),
      })
          .then((response) => response.json())
          .then((response) => {
            if (response.status) {
              notify({
                message: response.message,
                status: 'success',
                pos: 'top-left',
                timeout: 5000,
              });

              setTimeout(() => {
                if (document) {
                  document.location.href = "/authenticate";
                }
              }, 2500);
            } else {
              notify({
                message: response.message,
                status: 'danger',
                pos: 'top-left',
                timeout: 5000,
              });
            }

            setConfirmation(response.status);
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

  if (props.query.hasOwnProperty('user') && props.query.hasOwnProperty('token')) {
    return (
      <main>
        <section>
          <div className="uk-container" >
            {confirmation &&
          (<div>
            <NextSeo
              title={ user ? `${user} - account confirmed!` : `Account confirmed!`}
            />
            <section id="authorized" className="uk-padding">
              <img src="/images/illustrations/access-granted.gif" alt="access granted" />
            </section>
          </div>)
            }
            {!confirmation &&
        <div>
          <NextSeo
            title="Confirm your account."
          />
          <section id="unauthorized" className="uk-padding">
            <img src="/images/illustrations/forbidden.gif" alt="access not granted" />
          </section>
        </div>
            }
          </div>
        </section>
      </main>
    );
  } else {
    setTimeout(()=> {
      if (document) {
        document.location.href = "/authenticate";
      }
    }, 2500);
    return (
      <Redirect/>
    );
  }
}

Confirmation.getInitialProps = ({query}: any) => {
  return {query};
};

export default Confirmation;
