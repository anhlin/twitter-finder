import './App.css';
import React, { useState, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import Users from './components/users/Users';
import UserInfo from './components/users/UserInfo';
import Search from './components/users/Search';
import Alert from './components/layout/alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoad] = useState(false);
    const [alert, setAlert] = useState(null);
    const [userInfo, setUserInfo] = useState([]);

    const clear = () => {
        //this.setState({ users: [], loading: false });
        setUsers([]);
        setLoad(false);
    };

    const searchUsers = text => {
        setLoad(true);
        axios
            .get('/api', {
                params: { q: text }
            })
            .then(res => {
                setUsers(res.data);
                setLoad(false);
                setAlert(null);
                //this.setState({ users: res.data, loading: false, alert: null });
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getUser = screen_name => {
        axios
            .get('/api/user', {
                params: { screen_name: screen_name }
            })
            .then(res => {
                setUserInfo(res.data);
                //this.setState({ userInfo: res.data });
            });
    };

    const changeAlert = (msg, type) => {
        setAlert({ msg: msg, type: type });
        setTimeout(() => setAlert(null), 3000);
        //this.setState({ alert: { msg: msg, type: type } });
    };

    return (
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
                                    <Search
                                        searchUsers={searchUsers}
                                        clear={clear}
                                        showClear={
                                            users.length > 0 ? true : false
                                        }
                                        setAlert={changeAlert}
                                    />
                                    <Users loading={loading} users={users} />
                                </Fragment>
                            )}
                        />
                        <Route
                            exact
                            path="/user/:screen_name"
                            render={props => (
                                <UserInfo
                                    {...props}
                                    getUser={getUser}
                                    userInfo={userInfo}
                                />
                            )}
                        />
                        } />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
