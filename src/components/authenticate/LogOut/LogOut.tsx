import fetch from 'isomorphic-unfetch';
import React from "react";
import Link from 'next/link';
import './LogOut.scss';

export default function LogOut() {
  const handleLogout = (event: any) => {
    event.preventDefault();

    // API route that will handle signing out
    const url = 'api/authenticate/logout';
    const spinner = document.getElementById('spinner');
    spinner?.classList.remove('uk-hidden');

    fetch(process.env.HOST + url, {
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
    <Link href="#">
      <a className="logout-link" onClick={(event) => handleLogout(event)}>Log out <i className="fal fa-sign-out"/></a>
    </Link>
  );
}
