import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './index.css';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CharacterSpecific from './pages/CharacterSpecific';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/About" exact component={About}></Route>
                <Route path="/contact" exact component={Contact}></Route>
                <Route path="/character-specific/:id" exact component={CharacterSpecific}></Route>
            </Switch>
        </App>
    </Router>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
