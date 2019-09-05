import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar navbar-dark navbar-expand-md pt-2">
            <Link to="/">
                <h2>
                    <i className={props.icon} /> {props.title}
                </h2>
            </Link>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Twitter Finder',
    icon: 'fab fa-twitter'
};

export default Navbar;
