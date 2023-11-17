import express from 'express';
import { connect } from './config/database.js';

const app = express();

// const Tweet = require('./models/tweet');
// const HashtagRepository = require('./repository/hashtag-repository');
// const Hashtag = require('./models/hashtags'); 

app.listen(3000, async() => {
    console.log('Server is running on port 3000');

    await connect();
    console.log('MongoDB connected');

    // let repo = new HashtagRepository();
    // await repo.bulkCreate([
    //     {
    //         title: 'Trend1',
    //         tweets: []
    //     },
    //     {
    //         title: 'Trend2',
    //         tweets: []
    //     },
    //     {
    //         title: 'Trend3',
    //         tweets: []
    //     },
    //     {
    //         title: 'Trend4',
    //         tweets: []
    //     },
    //     {
    //         title: 'Trend5',
    //         tweets: []
    //     }
    // ])
})