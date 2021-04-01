const express = require('express');

const app = express();

const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

mongoose.connect(process.env.MONGO_URI,
{ useNewUrlParser: true },
{ useUnifiedTopology: true })
.then(()=> console.log('DB connected'))
.catch(err => console.error(err))



// middleware
app.use('/posts', ()=>{
    console.log('this is a middleware running');
});


// routes
app.get('/',(req, res) => {
    res.send('home e achi');
});

// app.get('/posts',(req, res) => {
//     res.send('posts e achi');
// });



// listening to the server
app.listen(process.env.PORT || 3000);