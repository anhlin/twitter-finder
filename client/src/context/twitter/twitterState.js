import React, { useReducer } from 'react';
import axios from 'axios';
import twitterContext from './twitterContext';
import twitterReducer from './twitterReducer';

import {
    SEARCH_USERS,
    SET_LOAD,
    CLEAR,
    GET_USER,
    CLEAR_NAME,
    CHANGE_LIST,
    CLEAR_LIST
} from './types';

const TwitterState = props => {
    const initialState = {
        users: [],
        userInfo: [],
        loading: false,
        alert: null,
        screenName: '',
        list: Math.floor(Math.random() * 17)
    };

    const [state, dispatch] = useReducer(twitterReducer, initialState);

    //Search Users
    const searchUsers = text => {
        setLoad(true);
        axios
            .get('/api', {
                params: { q: text }
            })
            .then(res => {
                //setUsers(res.data);
                dispatch({ type: SEARCH_USERS, payload: res.data });
                //setAlert(null);
                //this.setState({ users: res.data, loading: false, alert: null });
            })
            .catch(err => {
                console.log(err);
            });
    };

    //Get User Info

    const getUser = screen_name => {
        setLoad();
        axios
            .get('/api/user', {
                params: { screen_name: screen_name }
            })
            .then(res => {
                dispatch({
                    type: GET_USER,
                    payload: { data: res.data, screenName: screen_name }
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    //Clear Users
    const clear = () => dispatch({ type: CLEAR });

    //Set Loading
    const setLoad = () => dispatch({ type: SET_LOAD });

    //Clear screen name
    const clearName = () => dispatch({ type: CLEAR_NAME });

    //Clear the twitter list
    const clearList = () => {
        dispatch({ type: CLEAR_LIST });

        //This makes the list refresh
        setImmediate(() => changeList());
    };

    const changeList = () => {
        var inc;
        if (state.list < 16) {
            inc = state.list + 1;
        } else {
            inc = 0;
        }
        dispatch({ type: CHANGE_LIST, payload: inc });
    };

    return (
        <twitterContext.Provider
            value={{
                users: state.users,
                userInfo: state.userInfo,
                loading: state.loading,
                alert: state.alert,
                searchUsers,
                clear,
                getUser,
                screenName: state.screenName,
                clearName,
                list: state.list,
                changeList,
                clearList
            }}
        >
            {props.children}
        </twitterContext.Provider>
    );
};

export default TwitterState;
