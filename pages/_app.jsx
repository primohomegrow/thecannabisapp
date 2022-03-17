// Authentication and Permissions
import { getSession, SessionProvider } from 'next-auth/react';

//Style Icons Etc.
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
config.autoAddCss = false;

// Components
import Appbar from '../components/Appbar';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Appbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
