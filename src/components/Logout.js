import fetch from 'isomorphic-unfetch';

export default function Logout() {
  const handleLogout = (e) => {
    e.preventDefault();

    // API route that will handle signing out
    const url = '/api/logout';

    fetch(url, {
      method: 'POST',
    }).then((response) => response.json()).then((response) => {
      const {message, state} = response;

      if (state) {
        console.log(message);

        if (document) {
          document.location.href = "/logged-out";
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <button className="uk-button" onClick={(e) => {
      handleLogout(e);
    }}>
        logout
    </button>
  );
}
