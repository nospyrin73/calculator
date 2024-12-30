import { createContext } from "react";

export type ThemeType = 'light' | 'dark';

export type AppContextType = {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
};

export const AppContext = createContext<AppContextType>({
    theme: 'light',
    setTheme: () => {}
});