const User = require('../models/user')

/// profile controller
module.exports.profile = function(req, res) {
        if (req.cookies.user_id) {
            User.findById(req.cookies.user_id, function(err, user) {
                if (user) {
                    return res.render('user_profile', {
                        user: user
                    })
                } else {
                    return res.redirect('/users/sign-in');
                }
            })
        } else {
            return res.redirect('/users/sign-in')
        }


    }
    ///// sign up page view
module.exports.signUp = function(req, res) {
        return res.render('user_sign_up')
    }
    //// sign in page view
module.exports.signIn = function(req, res) {
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
    // session creation
module.exports.createSession = function(req, res) {
    // find the user
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) { console.log(err); return }

        // handel user is found
        if (user) {
            //check the password
            if (user.password != req.body.password) {
                return res.redirect('back');
            }
            // handle cookie
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');

        }
        // handle user is not found
        else {
            return res.redirect('back');
        }
    })



    // password mismatch

    //cookie

    // handle user is not found
}


///////SIGN     OUT      FORM FROM PROFILE
module.exports.signOut = function(req, res) {
    res.clearCookie('user_id');
    return res.redirect('/users/sign-in');
}