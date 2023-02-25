// pages/_document.js

import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    return await NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html dir={"rtl"} lang={"fa"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
