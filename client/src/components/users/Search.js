import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clear, setAlert }) => {
    const [text, setText] = useState('');

    const onChange = event => setText(event.target.value);

    const onSubmit = event => {
        event.preventDefault();
        if (text.trim().length !== 0) {
            searchUsers(text);
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
                {showClear && (
                    <button className="btn btn-light btn-block" onClick={clear}>
                        Clear Results
                    </button>
                )}
            </form>
        </div>
    );
};
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search;
