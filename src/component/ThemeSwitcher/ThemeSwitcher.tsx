import { ReactElement, useContext } from "react";
import clsx from "clsx";

import CrescentIcon from '../../assets/icons/crescent.svg?react';
import SunIcon from '../../assets/icons/sun.svg?react';

import './theme-switcher.scss';
import { AppContext } from "../../context/App.context";

export function ThemeSwitcher(): ReactElement {
    const { theme, setTheme } = useContext(AppContext);

    return (
        <div className="theme-switcher">
            <button
              className={ clsx({ active: theme === 'light'}) }
              onClick={ () => setTheme('light') }>
                <SunIcon />
            </button>
            <button
              className={ clsx({ active: theme === 'dark' }) }
              onClick={ () => setTheme('dark') }>
                <CrescentIcon />
            </button>
        </div>
    );
}

export default ThemeSwitcher;