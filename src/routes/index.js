import React, { Component, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    IndexRoute,
} from 'react-router-dom';
import Page1 from '../views/Page1';
import Page10 from '../views/Page10';
import Page3 from '../views/Page3';
import Page4 from '../views/Page4';
import Page5 from '../views/Page5';
import Page6 from '../views/Page6';
import Page9 from '../views/Page9';

export default class index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Page1} />
                <Route path="/page3" exact component={Page3} />
                <Route path="/page4" exact component={Page4} />
                <Route path="/page5" exact component={Page5} />
                <Route path="/page6" exact component={Page6} />
                <Route path="/page9" exact component={Page9} />
                <Route path="/page10" exact component={Page10} />
            </Switch>
        );
    }
}