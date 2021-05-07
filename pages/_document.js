import Document, { Html, Head, NextScript, Main } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-CA">
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
