import axios from "axios";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap" rel="stylesheet" />
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://kit.fontawesome.com/74eb824b54.js" crossOrigin="anonymous"></script>
      </body>
    </Html>
  );
}