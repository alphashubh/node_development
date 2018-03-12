import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './component/app';
import Chat from './component/chat';

render(
    <Router history={browserHistory}>
        <Route path="/"  component={App} />
        <Route path="/chat"  component={Chat} />
    </Router>,
    document.getElementById("root")
)
