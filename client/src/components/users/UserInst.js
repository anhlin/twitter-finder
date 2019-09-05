import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TwitterContext from '../../context/twitter/twitterContext';

const UserInst = props => {
    const { screen_name, profile_image_url, profile_banner_url } = props.user;
    const twitterContext = useContext(TwitterContext);

    useEffect(() => {
        twitterContext.clearName();
        //eslint-disable-next-line
    }, []);

    return (
        <Link to={`/user/${screen_name}`}>
            <div
                className="cardo text-center inst"
                style={{
                    backgroundImage: 'url(' + profile_banner_url + ')',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    height: '350px',
                    borderRadius: '10px'
                }}
            >
                <img
                    src={profile_image_url
                        .replace('_normal', '')
                        .replace('http', 'https')}
                    alt=""
                    className="round-img "
                    style={{ width: '100px' }}
                />
                <div style={{ backgroundColor: 'black', opacity: 0.5 }}>
                    <h4 className="mt-5" style={{ color: 'white' }}>
                        @{screen_name}
                    </h4>
                </div>
            </div>
        </Link>
    );
};

export default UserInst;
