import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';



class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180941151-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-180941151-1');
      </script>

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
