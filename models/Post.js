const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    jword: {
        type: String,
        required: true
    },
    imglink: {
        type: String,
        required: true
    },
    n: {
        type: Number,
        required: true
    }
    // date: {
    //     type: Date,
    //     required: Date.now
    // }
});


// mongoose.Schema({
//     username: String,
//     password: String
// })

module.exports = mongoose.model('Posts', PostSchema);