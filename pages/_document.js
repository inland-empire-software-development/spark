/* eslint-disable no-unused-vars */
import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from 'react';
import fetch from "isomorphic-unfetch";
import Spinner from "../src/components/global/Spinner";

const access = {state: undefined};

class main extends Document {
  static async getInitialProps( ctx ) {
    const initialProps = await Document.getInitialProps(ctx);
    const {pathname} = ctx;
    const res = await fetch(`http://localhost:3000/api/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({pathname}),
    });

    initialProps.access = await res.json();

    return {...initialProps};
  }

  getPageName(props) {
    return props['__NEXT_DATA__'].page.replace('/', '');
  }

  getUserState(props) {
    return props.access ? 'logged-in' : 'logged-out';
  }

  render(props) {
    const {access} = this.props;
    console.log(access);
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
          <link rel="manifest" href="/icon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css" />

        </Head>

        <body className={`portal-${this.getPageName(this.props)} ${this.getUserState(this.props)}`}>
          <Main />
          <NextScript />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit-icons.min.js"></script>

        </body>

      </Html>
    );
  }
}

export default main;
