import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import Register from "./Register";
import Login from "./Login";
import Details from "./components/Details";
import Cart from "./components/Cart";
import {ProductProvider} from "./context";

const routing = (
    <BrowserRouter>
        <ProductProvider>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/cart" component={Cart} />
        </div>
        </ProductProvider>
    </BrowserRouter>
)
// routing,
//
// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.register();

ReactDOM.render(
routing,
    document.getElementById('root'));
serviceWorker.register();