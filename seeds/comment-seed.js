//Import Comment Model 
const { Comment } = require('../models');

//Create a list of comment 
const commentData = [
    {
        'comment_text': 'that was a good launch',
        'user_id': 1,
        'launch_id': '5eb87cd9ffd86e000604b32a'
    },
    {
        'comment_text': 'that was a great launch',
        'user_id': 2,
        'launch_id': '5eb87cdaffd86e000604b32b'
    },
    {
        'comment_text': 'that was a ok launch',
        'user_id': 3,
        'launch_id': '5eb87cdbffd86e000604b32c'
    },
    {
        'comment_text': 'that was a bad launch',
        'user_id': 4,
        'launch_id': '5eb87cdbffd86e000604b32d'
    }
];

//Insert users into the database
const seedComments = () => Comment.bulkCreate(commentData);

//Export the seeded comments
module.exports = seedComments;