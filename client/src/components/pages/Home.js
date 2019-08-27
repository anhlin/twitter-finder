import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="button-wrapper ">
                <Link to="/search">
                    <button>Search</button>
                </Link>
                <Link to="/random">
                    <button>Random</button>
                </Link>
            </div>
            <p
                style={{
                    bottom: '0',
                    position: 'fixed',
                    width: '100%',
                    textAlign: 'center',
                    color: '#fff'
                }}
            >
                Anthony Lin © 2019
            </p>
        </div>
    );
};

export default Home;
