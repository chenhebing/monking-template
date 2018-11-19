import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { className } from './index.css';

class Index extends Component {
    render () {
        return (
            <div className={className}>
                <Switch>
                    <Route path="" component={} ></Route>
                </Switch>
            </div>
        );
    }
}

export default Index;
