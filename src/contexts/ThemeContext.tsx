import { createContext, ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import usePersistedState from "../hooks/usePersistedState";

interface ThemeContextType {
    theme: DefaultTheme;
    toggleTheme: Function;
}

type ThemeContextProviderProps = {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider(props: ThemeContextProviderProps) {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("LetmeaskTheme", dark);
    const toggleTheme = () => {
        setTheme(theme.mode === "dark" ? light : dark);
    };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};