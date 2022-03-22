import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html data-theme='emerald'>
      <Head />
      <body className='container mx-auto h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
