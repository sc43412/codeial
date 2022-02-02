const Post = require('../models/post')
module.exports.add = function(req, res) {
    // console.log(res.locals.user);
    Post.find({}).populate('user')
    .populate({
        path : "comment",
        populate : { 
            path : "user"
        }
    })              
    .exec(function(err, posts) {
        return res.render('home', {
            posts: posts
        })
    })

}