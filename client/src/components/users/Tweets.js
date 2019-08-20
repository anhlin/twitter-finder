import React, { useContext } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import TwitterContext from '../../context/twitter/twitterContext';

const Tweets = () => {
    const twitterContext = useContext(TwitterContext);
    if (twitterContext.screenName) {
        return (
            <div>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={twitterContext.screenName}
                    options={{ height: 800 }}
                />
            </div>
        );
    } else {
        return <div />;
    }
};

export default Tweets;
