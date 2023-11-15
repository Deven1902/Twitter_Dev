const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');

app.listen(3000, async() => {
    console.log('Server is running on port 3000');

    await connect();
    console.log('MongoDB connected');

    // const tweet = await Tweet.create({
    //     content: 'third tweet!',
    //     userEmail: 'a3.com'
    // });

    // const tweetFind = await Tweet.find({userEmail: 'a3.com'});
    // console.log(tweetFind); 
    
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.get('5f9b7b5b9b0b3e1b1c3b3b1d');
})