import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar navbar-dark navbar-expand-md">
            <Link to="/">
                <h2>
                    <i className={props.icon} /> {props.title}
                </h2>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Twitter Finder',
    icon: 'fab fa-twitter'
};

export default Navbar;
