/* eslint-disable no-unused-vars */
import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

class main extends Document {
  test() {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('shit');
    });
  }

  render() {
    return (
      <Html>
        <Head>

        </Head>

        <body className="iesd">
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
