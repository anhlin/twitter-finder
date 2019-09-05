import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="button-wrapper">
                <div className="d-flex justify-content-center">
                    <Link to="/search">
                        <button className="button">Search</button>
                    </Link>
                    <Link to="/random">
                        <button className="button">Random</button>
                    </Link>
                </div>
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
