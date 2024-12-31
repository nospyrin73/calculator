import { useState } from 'react';
import clsx from 'clsx';

import Calculator from './component/Calculator/Calculator';
import { AppContext, type ThemeType } from './context/App.context';

import './App.css';

function App() {
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <AppContext.Provider value={ {
            theme,
            setTheme
        } }>
            <div className={ clsx('wrapper', `theme-${theme}`) }>
                <Calculator />
            </div>
        </AppContext.Provider>
    );
}

export default App;
