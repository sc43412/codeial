// const User = require('../models/user');
const User = require('../models/user')
module.exports.profile = function(req, res) {
    User.findById({_id : req.params.profileid},function(err,user){
        return res.render('user_profile.ejs',{
            oneuser : user
        } )
    })
   
}
module.exports.mean= function(req,res){
    console.log(req.user.id);
    console.log(req.params.updateid);
    console.log(req.body);
      if(req.user.id==req.params.updateid){
            User.findByIdAndUpdate(req.params.updateid,req.body,function(err){
              if(err){ console.log("not updated");return;}
              return res.redirect('back')  
            })
      }
      else{
      return res.redirect('back');}
}

module.exports.signUp = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up')
}
module.exports.signIn = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in')
}

/// create data sign up form
module.exports.create = function(req, res) {
        if (req.body.password != req.body.confirm_password) {
            return res.redirect('back');
        }

        User.findOne({ email: req.body.email }, function(err, user) {
            if (err) { console.log('error in finding user in signing up'); return }

            if (!user) {
                User.create(req.body, function(err, user) {
                    if (err) { console.log('error in creating user while signing up'); return }

                    return res.redirect('/users/sign-in');
                })
            } else {
                return res.redirect('back');
            }

        });
    }
    // use passport as a middleware to authenticate
    // sign in and create a session for the user
module.exports.createSession = function(req, res) {
    return res.redirect('/');
}

module.exports.destroySession = function(req, res) {
    req.logout();

    return res.redirect('/');
}