import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";


import {ThemeProvider} from 'styled-components';

import {GlobalStyle, theme_base} from './styles';

import Navigation from "./components/Layout/Navigation/Navigation";
import Banner from "./components/Layout/Banner/Banner";


function App() {

    const themeConfig = React.useMemo(
        () => ({
            ...theme_base
        }),
        []
    );

    return (
        <ThemeProvider theme={themeConfig}>
            <GlobalStyle theme={themeConfig}/>
            <Navigation/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Banner}/>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
