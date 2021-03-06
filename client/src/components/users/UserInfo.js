import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Tweets from './Tweets';
import TwitterContext from '../../context/twitter/twitterContext';
import Spinner from '../layout/Spinner';

const UserInfo = ({ match }) => {
    const twitterContext = useContext(TwitterContext);
    const { getUser, userInfo } = twitterContext;

    useEffect(() => {
        getUser(match.params.screen_name);
        //eslint-disable-next-line
    }, []);

    if (userInfo[0]) {
        const {
            screen_name,
            followers_count,
            name,
            verified,
            profile_image_url,
            location,
            description,
            url,
            statuses_count
        } = userInfo[0];
        return (
            <div className="info-ctn">
                <Link to="/search">
                    <i className="fas fa-arrow-left fa-2x" />
                </Link>
                <div className="cardo grid-2 pt-2 pr-2">
                    <div className="all-center">
                        <img
                            src={profile_image_url
                                .replace('_normal', '')
                                .replace('http', 'https')}
                            className="round-img"
                            alt=""
                            style={{ width: '150px' }}
                        />
                        <h1 className="pt-4">{name}</h1>
                        {screen_name && (
                            <Fragment>
                                <p>@{screen_name}</p>
                            </Fragment>
                        )}
                        <strong>Verified:</strong>
                        {verified ? (
                            <i className="fas fa-check text-success" />
                        ) : (
                            <i className="fas fa-times-circle text-danger" />
                        )}
                    </div>
                    <div className="all-center">
                        {description && (
                            <Fragment>
                                <strong>Bio</strong>
                                <p>{description}</p>
                            </Fragment>
                        )}
                        {location && (
                            <Fragment>
                                <strong>Location: </strong> {location}
                            </Fragment>
                        )}
                        <div className="row pt-3">
                            <div className="col-12 pt-5 pb-5">
                                <a
                                    href={'https://twitter.com/' + screen_name}
                                    className="button"
                                >
                                    Visit Twitter Profile
                                </a>
                            </div>
                            <div className="col-12">
                                {url && (
                                    <a href={url} className="button">
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardo text-center mt-4">
                    <div className="badge badge-primary">
                        Followers: {followers_count.toLocaleString()}
                    </div>
                    <div className="badge badge-light">
                        Tweets: {statuses_count.toLocaleString()}
                    </div>
                </div>
                <Tweets screenName={screen_name} />
            </div>
        );
    } else {
        return (
            <div>
                <Spinner> </Spinner>
            </div>
        );
    }
};

export default UserInfo;
