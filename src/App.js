import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context/index';
import MainRoute from './MainRoute';

function App() {
    return (
        <Router>
            <Provider>
            <MainRoute />
            </Provider>
        </Router>
    );
}

export default App;
