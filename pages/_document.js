import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';



class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body onContextMenu={false}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument