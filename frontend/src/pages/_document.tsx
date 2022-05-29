import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="fi">
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          {/* COMMON SEO */}
          <meta content="#f9fafc" name="theme-color" />
          <meta charSet="utf-8" />
          <meta content="finnish" name="language" />

          <meta content="kassq" name="author" />
          <meta content="kassq" name="designer" />
          <meta content="kassq" name="publisher" />

          <meta
            content="Lounastutka auttaa valitsemaan päivän lounaspaikan demokratian keinoin!"
            name="description"
          />
          <meta content="lounastutka, lounas, ravintola" name="keywords" />

          <meta content="index, follow" name="robots" />
          <meta content="Lounas" name="subject" />

          {/* OpenGraph */}
          <meta
            content={`Äänestä päivän lounaspaikkaa`}
            property="og:site_name"
          />
          <meta content="Lounastutka" property="og:title" />
          <meta content="website" property="og:type" />
          <meta content="https://koodihaaste.kassq.dev" property="og:url" />
          <meta
            content="Lounastutka auttaa valitsemaan päivän lounaspaikan demokratian keinoin!"
            property="og:description"
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

export default CustomDocument;
