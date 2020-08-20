import { AppProps } from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../components/GlobalStyles';
import { useStore } from '../store';
import { theme } from '../themes';

const AppRoot: React.FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default AppRoot;
