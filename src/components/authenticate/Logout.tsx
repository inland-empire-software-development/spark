import fetch from 'isomorphic-unfetch';

export default function Logout() {
  const handleLogout = (e: any) => {
    e.preventDefault();

    // API route that will handle signing out
    const url = '/api/authenticate/logout';

    fetch(url, {
      method: 'POST',
    }).then((response) => response.json()).then((response) => {
      const {status} = response;

      if (status) {
        if (document) {
          document.location.href = "/logged-out";
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <button className="uk-button black" onClick={(event) =>
      handleLogout(event)
    }>
        logout
    </button>
  );
}
