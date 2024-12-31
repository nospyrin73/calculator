import { ReactElement, useContext } from "react";

import CrescentIcon from '../../assets/icons/crescent.svg';
import SunIcon from '../../assets/icons/sun.svg';

import './theme-switcher.scss';
import { AppContext } from "../../context/App.context";

export function ThemeSwitcher(): ReactElement {
    const { setTheme } = useContext(AppContext);

    return (
        <div className="theme-switcher">
            <button onClick={ () => setTheme('light') }><img src={ SunIcon } /></button>
            <button onClick={ () => setTheme('dark') }><img src={ CrescentIcon } /></button>
        </div>
    );
}

export default ThemeSwitcher;