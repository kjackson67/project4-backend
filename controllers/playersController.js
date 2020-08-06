const express = require("express");
const router = express.Router();

const PlayerModel = require("../models").Player;
const CourseModel = require("../models").Course;
const RoundModel = require("../models").Round;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  PlayerModel.findByPk(req.params.id, {
    include: [
      {
        model: CourseModel,
        attributes: ["id", "name"],
      },
    ],
  }).then((playerProfile) => {
    res.render("players/profile.ejs", {
      player: playerProfile,
    });
  });
});

//  SIGNUP //
 router.get("/signup", (req, res) => {
  res.render("players/signup.ejs");
});

router.post("/login", (req, res) => {
  PlayerModel.findOne({ where: {username: req.body.username, password: req.body.password,
  } }).then((logInPlayer) => {
      res.redirect(`/players/profile/${logInPlayer.id}`);
  })
  .catch((err) => {
      res.redirect("/players");
  });
});

// UPDATE PROFILE - SEQUELIZE(.PUT) //
router.put("/profile/:id", (req, res) => {
  PlayerModel.update(req.body, {where: { id: req.params.id } }).then(() => {
    res.redirect(`/players/profile/${req.params.id}`);
  });
});

// DELETE USER ROUTE/PROFILE //
router.delete("/:id", (req, res) => {
  PlayerModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
