import {useContext} from 'react';
import Context from '../src/context';

function Dashboard(props) {
  const {user, access, redirect, secure} = useContext(Context);
  console.log('user: ', user, ' access: ', access, ' secure: ', secure, ' redirect: ', redirect);
  return (
    <main>
      <h1>.</h1>
    </main>
  );
}

export default Dashboard;
