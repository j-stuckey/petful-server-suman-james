'use strict';

const express = require('express');

const router = express.Router();

const cats = [
    {
        imageURL:
            'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street'
    },
    {
        imageURL:
            'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=350',
        imageDescription: 'White cat looking up',
        name: 'Marshmellow',
        sex: 'Male',
        age: 3,
        breed: 'Bengal',
        story: 'Owner had to move'
    },
    {
        imageURL:
            'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&h=350',
        imageDescription: 'Orange cat with stripes with face in pillow',
        name: 'Mittens',
        sex: 'Female',
        age: 4,
        breed: 'Bengal',
        story: 'Owner passed away'
    }
];

router.get('/', (req, res, next) => {
    res.json(cats[0]);
});

router.delete('/', (req, res, next) => {
    const cat = cats.shift();
    res.json(cats[0]);
});

module.exports = router;
