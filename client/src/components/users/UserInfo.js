import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Tweets from './Tweets';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
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
            statuses_count,
            profile_banner_url
        } = userInfo[0];
        return (
            <Fragment>
                <Link to="/">
                    <i
                        className="fas fa-arrow-left"
                        style={{ width: '938px' }}
                    />
                </Link>

                <div
                    className="card grid-2"
                    style={{ backgroundImage: { profile_banner_url } }}
                >
                    <div className="all-center">
                        <img
                            src={profile_image_url.replace('_normal', '')}
                            className="round-img"
                            alt=""
                            style={{ width: '150px' }}
                        />
                        <h1>{name}</h1>
                        {screen_name && (
                            <Fragment>
                                <p>@{screen_name}</p>
                            </Fragment>
                        )}
                    </div>
                    <div>
                        {description && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{description}</p>
                            </Fragment>
                        )}
                        <a
                            href={'https://twitter.com/' + screen_name}
                            className="btn btn-dark my-1"
                        >
                            Visit Twitter Profile
                        </a>
                        {url && (
                            <a href={url} className="btn btn-dark my-1">
                                Visit Website
                            </a>
                        )}
                        <ul>
                            <li>
                                {location && (
                                    <Fragment>
                                        <strong>Location: </strong> {location}
                                    </Fragment>
                                )}
                            </li>
                            Verified:
                            {verified ? (
                                <i className="fas fa-check text-success" />
                            ) : (
                                <i className="fas fa-times-circle text-danger" />
                            )}
                            <li />
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">
                        Followers: {followers_count}
                    </div>
                    <div className="badge badge-light">
                        Tweets: {statuses_count}
                    </div>
                </div>
                <Tweets screenName={screen_name} />
            </Fragment>
        );
    } else {
        return (
            <div>
                {' '}
                <Spinner> </Spinner>
            </div>
        );
    }
};

export default UserInfo;
