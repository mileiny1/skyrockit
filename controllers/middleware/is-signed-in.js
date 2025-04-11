// middleware/is-signed-in.js

const isSignedIn = (req, res, next) => {
    if (req.session.user) return next();
    return next();
};

// Otherwise, send them to the sign in
    res.redirect('/auth/sign-in');


  module.exports = isSignedIn;
  