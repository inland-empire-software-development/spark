import {useContext} from 'react';
import Context from '../src/context';
import Logout from '../src/components/Logout';

function Dashboard() {
  const {user, access, redirect, secure} = useContext(Context);
  console.log('user: ', user, ' access: ', access, ' secure: ', secure, ' redirect: ', redirect);

  return (
    <div className="uk-container uk-margin-large-top">
      <h1>Hello {user}!</h1>
      <Logout/>
    </div>
  );
}

export default Dashboard;
