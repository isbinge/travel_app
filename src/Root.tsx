import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './pages';
import { Provider } from 'react-redux';
import { Store } from 'redux';

const Root: React.FC<{ store: Store }> = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>
);

export default Root;
