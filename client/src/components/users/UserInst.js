import React from 'react';
import { Link } from 'react-router-dom';
//Functional Component
const UserInst = props => {
    const { screen_name, profile_image_url, profile_banner_url } = props.user;

    return (
        <div
            className="card text-center"
            style={{
                backgroundImage: 'url(' + profile_banner_url + ')',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
        >
            <img
                src={profile_image_url.replace('_normal', '')}
                alt=""
                className="round-img"
                style={{ width: '100px' }}
            />
            <div style={{ backgroundColor: 'black', opacity: 0.5 }}>
                <h3 style={{ color: 'white' }}>{screen_name}</h3>
            </div>
            <div>
                <Link
                    to={`/user/${screen_name}`}
                    className="btn btn-dark btn-sm my-1"
                >
                    More
                </Link>
            </div>
        </div>
    );
};

export default UserInst;
