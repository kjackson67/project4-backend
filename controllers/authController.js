require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const PlayerModel = require("../models").Player;

// SIGN OUT ROUTE
router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/");
});

// GET SIGNUP FORM
router.get("/signup", (req, res) => {
  res.render("players/signup.ejs");
});

// POST - CREATE NEW USER FROM SIGNUP
router.post("/signup", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).json(err);

    bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
      if (err) return res.status(500).json(err);
      req.body.password = hashedPwd;

      PlayerModel.create(req.body)
        .then((newPlayer) => {
          const token = jwt.sign(
            {
              username: newPlayer.username,
              id: newPlayer.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );
          console.log(token);
          res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
          res.redirect(`/players/profile/${newPlayer.id}`);
        })
        .catch((err) => {
          console.log(err);
          res.send(`err ${err}`);
        });
    });
  });
});

// GET LOGIN
router.get("/login", (req, res) => {
  res.render("players/login.ejs");
});

// POST LOGIN
router.post("/login", (req, res) => {
  PlayerModel.findOne({
    where: {
      username: req.body.username,
    },
  }).then((foundPlayer) => {
    if (foundPlayer) {
      bcrypt.compare(req.body.password, foundPlayer.password, (err, match) => {
        if (match) {
          const token = jwt.sign(
            {
              username: foundPlayer.username,
              id: foundPlayer.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );
          console.log(token);
          res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
          res.redirect(`/players/profile/${foundPlayer.id}`);
        } else {
          return res.sendStatus(400);
        }
      });
    }
  });
});

module.exports = router;
