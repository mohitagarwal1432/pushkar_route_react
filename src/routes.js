import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './include/header.js'
import Footer from './include/footer.js'

import Home from './home/index.js'

const RouterSetup = () => {
    return (
        <Router exact path='/'>
            <Home />
        </Router>
    );
}

ReactDom.render(<Header />, document.getElementById("header"));

ReactDom.render(<Home />, document.getElementById("main"));

//ReactDom.render(<Home />, document.getElementById("main"));
