import { ReactElement } from "react";

import './calculator.scss';

export function Calculator(): ReactElement {
    return (
        <div className="calculator">
            <div className="calculator__screen"></div>
            <div className="calculator__keypad"></div>
        </div>
    );
}

export default Calculator;