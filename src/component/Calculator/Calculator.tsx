import { ReactElement, useContext } from "react";

import { AppContext } from "../../context/App.context";

import './calculator.scss';
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Keypad from "../Keypad/Keypad";

export function Calculator(): ReactElement {
    const { theme } = useContext(AppContext);
    console.log('novas - theme:', theme);

    return (
        <div className="calculator">
            <div className="calculator__screen">
                <ThemeSwitcher />
            </div>
            <div className="calculator__keypad">
                <Keypad />
            </div>
        </div>
    );
}

export default Calculator;