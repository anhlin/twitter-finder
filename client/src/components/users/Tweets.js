import React from 'react';
import { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Tweets extends Component {
    state = {
        screenName: ''
    };

    changeName = () => {
        this.setState({ screenName: this.props.screenName });
    };

    componentDidMount() {
        this.setState({ screenName: this.props.screenName });
        this.props.setTweets();
    }

    render() {
        console.log(this.state.screenName);
        return (
            <div>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={this.state.screenName}
                    options={{ height: 800 }}
                />
            </div>
        );
    }
}

export default Tweets;
