import './App.css';
import React, { useState, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Users from './components/users/Users';
import UserInfo from './components/users/UserInfo';
import Search from './components/users/Search';
import Alert from './components/layout/alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TwitList from './components/users/TwitList';

import TwitterState from './context/twitter/twitterState';

const App = () => {
    const [alert, setAlert] = useState(null);

    const changeAlert = (msg, type) => {
        setAlert({ msg: msg, type: type });
        setTimeout(() => setAlert(null), 3000);
    };

    return (
        <TwitterState>
            <Router>
                <div className="App">
                    <Navbar title="Twitter Finder" icon="fab fa-twitter" />
                    <div className="container">
                        <Alert alert={alert} />
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route
                                exact
                                path="/search"
                                render={props => (
                                    <Fragment>
                                        <Search setAlert={changeAlert} />
                                        <Users />
                                    </Fragment>
                                )}
                            />
                            <Route
                                exact
                                path="/user/:screen_name"
                                render={props => <UserInfo {...props} />}
                            />
                            <Route
                                exact
                                path="/random"
                                component={TwitList}
                            ></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </TwitterState>
    );
};

export default App;
