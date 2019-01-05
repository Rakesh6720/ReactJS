<<<<<<< HEAD
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from "./StorePicker";
import App from "./App.js";
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

=======
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from "./StorePicker";
import App from "./App.js";
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

>>>>>>> 6ea5f477453f884d729f0ac7b7aa939fbcb24f8c
export default Router;