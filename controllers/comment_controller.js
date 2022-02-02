const Comment = require('../models/comment');
const Post = require('../models/post')
module.exports.create= function(req,res){
    // var id = req.body.post;
   Post.findById({_id : req.body.post},function(err,post){
        if(err){ console.log("error in finding post");return res.redirect('/');}
        if(post){
            Comment.create({
                content : req.body.content,
                user : req.user.id,
                post : req.body.post

            },function(err,comment){
                if(err){console.log("error in insert"); return;}
                console.log(comment);
               post.comment.push(comment);
               post.save();
               return res.redirect('/')
            })
        } 
   });
}

module.exports.destroy=function(req,res){
Comment.findById(req.params.deleteuid,function(err,comment){
   if(err){console.log("cannot find comment"); return res.redirect('/')}
   console.log(req.user.id);
//    console.log("hellooooooo");
   console.log(comment.user);
   if(req.user.id==comment.user){
    
    Post.updateOne({ id: comment.post }, {
        $pullAll: {
            comment : [{_id: req.params.deleteUid}],
        },
    });
    
     comment.remove();
     return res.redirect('back');
    
    
    //  comment.remove();
   } else{
       return res.redirect('back');
   }
});
// console.log('hello');


}