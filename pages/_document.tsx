import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous" 
        />

        {/* <link href="css/bootstrap.rtl.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="css/fontawesome.min.css" />
        <link rel="stylesheet" href="css/boxicons.min.css" />
        <link rel="stylesheet" href="css/animated.css" />
        <link rel="stylesheet" href="css/owl.css" />
        <link rel="stylesheet" href="css/main.css" /> */}
        
      </Head>
      <body>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
