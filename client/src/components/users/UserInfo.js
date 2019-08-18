import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Tweets from './Tweets';

export class UserInfo extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.screen_name);
    }

    render() {
        if (this.props.userInfo[0]) {
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
            } = this.props.userInfo[0];
            return (
                <Fragment>
                    <Link to="/" className="btn btn-light">
                        Back To Search
                    </Link>
                    Verified:{' '}
                    {verified ? (
                        <i className="fas fa-check text-success" />
                    ) : (
                        <i className="fas fa-times-circle text-danger" />
                    )}
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
                                            <strong>Location: </strong>{' '}
                                            {location}
                                        </Fragment>
                                    )}
                                </li>

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
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName={screen_name}
                        options={{ height: 800 }}
                    />
                </Fragment>
            );
        } else {
            return <div> </div>;
        }
    }
}

export default UserInfo;
