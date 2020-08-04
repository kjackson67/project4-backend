const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const CourseModel = reuire("../models").Course;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id, {
    include: [
      {
        model: CourseModel,
        attributes: ["id", "name"],
      },
    ],
  }).then((userProfile) => {
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});

 // SIGNUP //
 router.get("/signup", (req, res) => {
  res.render("players/signup.ejs");
});

router.post("/login", (req, res) => {
  UserrModel.findOne({ where: {username: req.body.username, password: req.body.password,
  } }).then((logInUser) => {
      res.redirect(`/users/profile/${logInUser.id}`);
  })
  .catch((err) => {
      res.redirect("/users");
  });
});

// UPDATE PROFILE - SEQUELIZE(.PUT) //
router.put("/profile/:id", (req, res) => {
  UserModel.update(req.body, {where: {id: req.params.id } }).then(() =>
  res.redirect(`/users/profile/${req.params.id}`));
});

// DELETE USER ROUTE/PROFILE //
router.delete("/:id", (req, res) => {
  UserModel.destroy({where: {id: req.params.id}})
  res.redirect("/users");
  });

module.exports = router;
