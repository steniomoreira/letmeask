import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as themes from './styles/themes';
import usePersistedState from './utils/usePersistedState';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import { AuthContextProvider } from './contexts/AuthContext';
import GlobalStyle from './styles/global';
import { ThemeButton } from './components/ThemeButton';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = usePersistedState('LetmeaskTheme', themes.light);

  const toogleTheme = () => {
    setTheme(theme.name === 'light' ? themes.dark : themes.light);
  }

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <ThemeButton toogleTheme={toogleTheme}/>
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms/new' component={NewRoom} />
          <Route path='/rooms/:id' component={Room} />
          <Route path='/admin/rooms/:id' component={AdminRoom} />
        </Switch>
      </AuthContextProvider>  
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;