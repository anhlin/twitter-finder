import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
    state = {
        text: ''
    };

    onChange = event =>
        this.setState({ [event.target.name]: event.target.value });

    onSubmit = event => {
        event.preventDefault();
        if (this.state.text.trim().length !== 0) {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        } else {
            this.props.setAlert('Enter a Name!', 'light');
        }
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clear: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Enter a Name"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />
                </form>
                {this.props.showClear && (
                    <button
                        className="btn btn-light btn-block"
                        onClick={this.props.clear}
                    >
                        Clear
                    </button>
                )}
            </div>
        );
    }
}
