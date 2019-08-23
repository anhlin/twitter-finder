# twitter-finder
Search Twitter users!

Created with React, Express, Node.js

Deployed on Heroku: https://twitter-finder.herokuapp.com

This is a small web app that I made in a couple days while playing	around with React and the Twitter API. Allows users to enter a name
or screen name and displays a list of users. When a user is clicked, 
information about them is displayed as well as their Tweets. 

Also added a "random Twitter list" feature. 

Challenges
- Originally intended to be a frontend project.
- Needed to set up an Express backend for the API calls since 
  Twitter's API requires authentication, which can't be done client
  side. 
- State management. I was originally using prop drilling, which
  turned out to be very messy and unscalable. Spent some time switching
  over to React's Context API and Hooks. Made things a lot easier! 
