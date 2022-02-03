const Post = require('../models/post')
const User = require('../models/user')
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
        User.find({},function(err,user){
            return res.render('home', {
                posts: posts,
                all_users:user
            })
        })
        
    })

}