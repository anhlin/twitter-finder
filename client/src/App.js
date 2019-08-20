import './App.css';
import React, { useState, Fragment, useContext } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import UserInfo from './components/users/UserInfo';
import Search from './components/users/Search';
import Alert from './components/layout/alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import TwitterContext from './context/twitter/twitterContext';
import TwitList from './components/users/TwitList';

import TwitterState from './context/twitter/twitterState';

const App = () => {
    const [alert, setAlert] = useState(null);
    const twitterContext = useContext(TwitterContext);

    const changeAlert = (msg, type) => {
        setAlert({ msg: msg, type: type });
        setTimeout(() => setAlert(null), 3000);
        //this.setState({ alert: { msg: msg, type: type } });
    };

    return (
        <TwitterState>
            <Router>
                <div className="App">
                    <Navbar title="Twitter Finder" icon="fab fa-twitter" />
                    <div className="container">
                        <Alert alert={alert} />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={props => (
                                    <Fragment>
                                        <h1
                                            style={{
                                                textAlign: 'center',
                                                padding: '25px'
                                            }}
                                        >
                                            Search for Users
                                        </h1>
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
                            } />
                        </Switch>
                    </div>
                    <div className="container">
                        <Fragment>
                            <h1
                                style={{ textAlign: 'center', padding: '25px' }}
                            >
                                Random Twitter List!
                            </h1>
                            <TwitList />
                        </Fragment>
                    </div>
                </div>
            </Router>
        </TwitterState>
    );
};

export default App;
