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
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Enter a Name (e.g. 'Bill')"
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
                {twitterContext.users.length > 0 && (
                    <button
                        className="btn btn-light btn-block"
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
