const Post = require('../models/post')
module.exports.add = function(req, res) {
    Post.find({}).populate('user').exec(function(err, posts) {
        return res.render('home', {
            posts: posts
        })
    })

}