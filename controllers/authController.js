/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

exports.googlelogin = (req, res) => {
  const { tokenId } = req.body;
  client.verifyIdToken({ idToken: tokenId, audience: process.env.REACT_APP_GOOGLE_CLIENT_ID }).then((response) => {
    const { email_verified, name, email } = response.payload;

    if (email_verified) {
      console.log(email_verified);
      User.findOne({ email }).exec((err, user) => {
        console.log(name);
        if (err) {
          return res.status(400).json({
            error: "This user doesn't exist. Created a google email and try again!",
          });
        } else {
          if (!user) {
            let password = email;
            console.log("Hello and welcome" + user);
            let newUser = new User({
              name,
              email,
              password,
            });
            newUser.save((err, data) => {
              if (err) {
                console.log("JESUS TAKE THE WHEEL", err);
                return res.status(400).json({
                  error: "I don't know what Happened!",
                });
              }
              console.log("Success");
            });
          }
        }
      });
    }
  });
};