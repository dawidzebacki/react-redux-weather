import React from "react";
import { useSelector } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { AppStore } from './store/store';
import { GlobalStyles } from './app.styled';
import { darkTheme, lightTheme } from "./theme";
import Home from './pages/Home';

const App: React.FC = () => {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )

}

export default App;
