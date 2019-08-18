import "./App.css";
import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import Users from "./components/users/Users";
import UserInfo from "./components/users/UserInfo";
import Search from "./components/users/Search";
import Alert from "./components/layout/alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    userInfo: []
  };

  clear = () => {
    this.setState({ users: [], loading: false });
  };

  searchUsers = text => {
    //this.setState({ loading: true });
    axios
      .get("/", {
        params: { q: text }
      })
      .then(res => {
        this.setState({ users: res.data, loading: false, alert: null });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getUser = screen_name => {
    axios
      .get("/user", {
        params: { screen_name: screen_name }
      })
      .then(res => {
        this.setState({ userInfo: res.data });
      });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
  };

  render() {
    const { users, loading, userInfo } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Twitter Finder" icon="fab fa-twitter" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clear={this.clear}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
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
                    getUser={this.getUser}
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
  }
}

export default App;
