import { ReactElement } from "react";

import './keypad.scss';

const keys = [
    'C', '(', ')', 'mod', 'n',
    '7', '8', '9', '/', 'sqr',
    '4', '5', '6', '*', 'x^2',
    '1', '2', '3', '-', '=',
    '0', '.', '%', '+', '='
];

export function Keypad(): ReactElement {
    return (
        <div className="keypad">
            { keys.map(key => (
                <div className="key">{ key }</div>
            )) }
        </div>
    );
}

export default Keypad;