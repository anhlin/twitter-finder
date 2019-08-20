import React, { useState, useEffect, useContext } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import TwitterContext from '../../context/twitter/twitterContext';

const TwitList = () => {
    //const [list, setList] = useState(0);
    const twitterContext = useContext(TwitterContext);
    useEffect(() => {
        twitterContext.changeList();
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
        { slug: 'Brands', ownerScreenName: 'AskAaronLee' }
    ];

    return (
        <div>
            <button onClick={twitterContext.changeList}> Refresh </button>
            <TwitterTimelineEmbed
                sourceType="list"
                slug={lists[twitterContext.list].slug}
                ownerScreenName={lists[twitterContext.list].ownerScreenName}
                options={{ height: 700 }}
            />
        </div>
    );
};

export default TwitList;
