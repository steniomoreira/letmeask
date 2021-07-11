import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from './contexts/AuthContext';
import { useTheme } from "./hooks/useTheme";
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthContextProvider>
      <Routes />
      </AuthContextProvider>  
    </ThemeProvider>
  );
}

export default App;