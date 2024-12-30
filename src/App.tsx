import Calculator from './component/Calculator/Calculator';
import { AppContext, type ThemeType } from './context/App.context';

import './App.css';
import { useState } from 'react';

function App() {
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <AppContext.Provider value={ {
            theme,
            setTheme
        } }>
            <div className="wrapper">
                <Calculator />
            </div>
        </AppContext.Provider>
    );
}

export default App;
