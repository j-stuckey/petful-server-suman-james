'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const catsRouter = require('./routes/cats');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

app.use(
    morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
        skip: (req, res) => process.env.NODE_ENV === 'test'
    })
);

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);

const dogs = [
    {
        imageURL:
            'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away'
    },
    {
        imageURL:
            'hhttps://www.pets4homes.co.uk/images/breeds/13/d8ef7fc8b20148107fcf4898293f9f83.jpg',
        imageDescription: 'Pug with pink necklace looking left',
        name: 'Brody',
        sex: 'Male',
        age: 6,
        breed: 'Pug',
        story: "Owner couldn't afford"
    },
    {
        imageURL:
            'https://puppyspot-photos-prod.s3.us-west-2.amazonaws.com/2/listing/563232/photo/4377266_large-resize.jpg',
        imageDescription: 'A husky with blue eyes looks at camera',
        name: 'Robby',
        sex: 'Male',
        age: 1,
        breed: 'Siberian Husky',
        story: 'Thrown on the street'
    }
];

// app.get('/api/cat', (req, res, next) => {
//     res.json(cats[0]);
// });

app.get('/api/dog', (req, res, next) => {
    res.json(dogs[0]);
});

app.use('/api/cat', catsRouter);

app.delete('api/cat/', (req, res, next) => {
    cats.shift();
    res.json(cats[0]);
});

function runServer(port = PORT) {
    const server = app
        .listen(port, () => {
            console.info(`App listening on port ${server.address().port}`);
        })
        .on('error', err => {
            console.error('Express failed to start');
            console.error(err);
        });
}

if (require.main === module) {
    dbConnect();
    runServer();
}

module.exports = { app };
