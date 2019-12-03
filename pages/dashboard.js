import Auth from "../components/hoc/Auth/Auth";

function Dashboard() {
  return (
    <Auth>
      <main>
        <h1>my dashboard</h1>
      </main>
    </Auth>
  );
}

export default Dashboard;
