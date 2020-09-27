import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from './styles/themes';

import { Context } from './Context';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

function App() {
  const { theme } = useContext(Context);

  return (
    <ThemeProvider theme={themes[theme]}>
      <Layout />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
