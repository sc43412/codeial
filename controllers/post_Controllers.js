const Post = require('../models/post')
const Comment = require('../models/comment')
module.exports.create = function(req, res) {
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function(err, post) {
        if (err) { console.log(err); return }
        return res.redirect('back');

    })
}

module.exports.destroy = function(req,res){
    console.log(req.params);
    
   Post.findById(req.params.id, function(err,post){
        if(err){ console.log("post not found"); return res.redirect('/');}
        // console.log(post.user);
        // console.log(req.user.id);
        if(post.user==req.user.id){
            // console.log(post.id==req.user.id);
           post.remove();
           console.log("post removed")
     Comment.deleteMany({post : post.id},function(err,comment){
       if(err){return res.redirect('back');}
       return res.redirect('/');
     })
        }
        else{
            return res.redirect('back');
        }
   })

}