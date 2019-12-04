import {useContext} from 'react';
import Context from '../src/components/context';


function Dashboard(props) {
  const {user} = useContext(Context);

  return (
    <main>
      <h1>
        {user && <p>Hello {user}</p>}

        {!user && <p>Logged Out</p>}
      </h1>
    </main>
  );
}

export default Dashboard;
