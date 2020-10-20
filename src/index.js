import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './include/header.js'

import Home from './home/index.js'
import Tour from './tour/index.js'
import Error from './error.js'

const RouterSetup = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}>
                </Route>
                <Route exact path='/index'component={Home}>
                </Route>
                <Route path='/:id' children={<Tour />}>
                </Route>
                <Route path='*' component={Error}>
                </Route>
            </Switch>
        </Router>
    );
}

//ReactDom.render(<Header />, document.getElementById("header"));

ReactDom.render(<RouterSetup />, document.getElementById("main"));


//ReactDom.render(<Home />, document.getElementById("main"));
