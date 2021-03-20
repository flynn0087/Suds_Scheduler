const User = require("../../models/User");

module.exports = {
  ensureAuth: function (req, res, next) {
    console.log(req.body, "HELLO FROM ENSUREAUTH!");

    // If the user is logged in, continue with the request to the restricted route
    User.findOne({ googleId: req.body.id })
      .then((user) => {
        if (user.isLoggedIn) {
          return next();
        }

        return res.redirect("/");
      })
      .catch((err) => console.log(err));

    // If the user isn't logged in, redirect them to the login page
  },
};
