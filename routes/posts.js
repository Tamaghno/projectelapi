const express = require('express');

const router = express.Router();


const Post = require('../models/Post')


// get back all posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){res.json({message: err})}
});

//retrieve a specific post through id in url
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err){res.json({message : err})}
})




//submits a post
router.post('/', async(req, res) => {
    // console.log(req.body);
    const post = new Post({
        word:req.body.word,
        jword:req.body.jword,
        imglink:req.body.imglink,
        n:req.body.n
    })

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch(err){res.json({message :err})}
    
})

//delete a speific post
router.delete('/:postId', async (req, res) => {
    // console.log(req.params.postId);
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }
    catch(err){res.json({message : err})}
})




// update a specific postId
router.patch('/:postId', async (req, res) => {
    // console.log(req.params.postId);
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            //{$set: {title: req.body.title}},
            {$set: {imglink: req.body.description}});
        res.json(updatedPost);
    }
    catch(err){res.json({message : err})}
})


// router.get('/specific',(req, res) => {
//     res.send('specific post e achi');
// });



module.exports = router;