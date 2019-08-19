import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar bg-primary">
            <Link to="/">
                <h1>
                    <i className={props.icon} />
                    {props.title}
                </h1>
            </Link>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Twitter Finder',
    icon: 'fab fa-twitter'
};

export default Navbar;
