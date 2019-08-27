import React, { useEffect, useContext } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Link } from 'react-router-dom';

import TwitterContext from '../../context/twitter/twitterContext';
import Spinner from '../layout/Spinner';

const TwitList = () => {
    const twitterContext = useContext(TwitterContext);
    const { list, changeList, clearList } = twitterContext;

    useEffect(() => {
        changeList();
        //eslint-disable-next-line
    }, []);

    const lists = [
        { slug: 'national-parks', ownerScreenName: 'TwitterDev' },
        { slug: 'Tech', ownerScreenName: 'davidebradford' },
        { slug: 'startup-a-list', ownerScreenName: 'mrrickrock' },
        { slug: 'nba-teams', ownerScreenName: 'chicagobulls' },
        { slug: 'style-source', ownerScreenName: 'uniqlousa' },
        { slug: 'Fitness', ownerScreenName: 'Soy_Imparable' },
        { slug: 'brainfood', ownerScreenName: 'legalnomads' },
        { slug: 'Travel', ownerScreenName: 'KristaRossow' },
        { slug: 'world-leaders', ownerScreenName: 'verified' },
        { slug: 'entertainment', ownerScreenName: 'verified' },
        { slug: 'Brands', ownerScreenName: 'AskAaronLee' },
        { slug: 'News', ownerScreenName: 'DyLanTLLee' },
        { slug: 'tech-companies', ownerScreenName: 'Scobleizer' },
        { slug: 'Business-Finance', ownerScreenName: 'getLittleBird' },
        { slug: 'NFL-Teams', ownerScreenName: 'nfl' },
        { slug: 'Players1', ownerScreenName: 'mlb' },
        { slug: 'NHL-Players', ownerScreenName: 'nhl' }
    ];
    if (list >= 0) {
        return (
            <div className="info-ctn">
                <Link to="/search">
                    <i className="fas fa-arrow-left fa-2x" />
                </Link>
                <div style={{ textAlign: 'center' }}>
                    <h1
                        style={{
                            padding: '25px',
                            display: 'inline-block'
                        }}
                    >
                        Random Twitter List!
                    </h1>
                    <i className="fas fa-redo-alt fa-2x" onClick={clearList} />
                </div>
                <div className="tweet-ctn">
                    <TwitterTimelineEmbed
                        sourceType="list"
                        slug={lists[list].slug}
                        ownerScreenName={lists[list].ownerScreenName}
                        options={{ height: 700 }}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                {' '}
                <h1 style={{ textAlign: 'center', padding: '25px' }}>
                    Random Twitter List!
                </h1>
                <i className="fas fa-redo-alt" />
                <Spinner />
            </div>
        );
    }
};

export default TwitList;
