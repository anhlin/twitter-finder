import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import TwitterContext from '../../context/twitter/twitterContext';

const Search = ({ setAlert }) => {
    const twitterContext = useContext(TwitterContext);
    const [text, setText] = useState('');

    const onChange = event => setText(event.target.value);

    const onSubmit = event => {
        event.preventDefault();
        if (text.trim().length !== 0) {
            twitterContext.searchUsers(text);
            setText('');
        } else {
            setAlert('Enter a Name!', 'light');
        }
    };

    return (
        <div className="search-ctn">
            <h1 className="title">Search for Users</h1>
            <form onSubmit={onSubmit} className="form">
                <input
                    className="btn btn-dark search-btn"
                    type="submit"
                    value="Search"
                />

                <div className="search">
                    <input
                        type="text"
                        name="text"
                        placeholder="Enter a name or screen name"
                        value={text}
                        onChange={onChange}
                        style={{ borderRadius: '25px' }}
                    />
                </div>
                {twitterContext.users.length > 0 && (
                    <button
                        className="btn btn-clear"
                        onClick={twitterContext.clear}
                    >
                        Clear Results
                    </button>
                )}
            </form>
        </div>
    );
};
Search.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default Search;
