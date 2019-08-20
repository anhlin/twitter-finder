var Twit = require('twit');

var port = process.env.PORT || 4000;

var T = new Twit({
    consumer_key: 'phV8qPJ8jY4heARo3rbJOgl2C',
    consumer_secret: 'cJXiuqXS7hZGQ3esPuET9s5ABZmpfqTtz9BaHrQc0KsLzXNB9X',
    access_token: '770000167508516867-DJCBtkXShPn9g41azOEAjc4kCYMq9tl',
    access_token_secret: 'bmnbqh4xHiPNZPopZbDCnaB6D4gUJqzeEy56gl7bjdllg'
});

T.get('statuses/sample', (err, data) => {
    console.log(data);
});
