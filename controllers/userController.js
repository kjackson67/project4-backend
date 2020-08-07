const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const CourseModel = require("../models").Course;
// const RoundModel = require("../models").Round;

router.get("/", (req, res) => {
  res.render("user/index.ejs");
});

router.get("/signup", (req, res) => {
  res.render("user/signup.ejs");
});

router.post("/", (req, res) => {
  UserModel.create(req.body).then((newUser) => {
    res.redirect(`/user/profile/${newUser.id}`);
  });
});

router.get("/login", (req, res) => {
  res.render("user/login.ejs");
});

router.post("/login", (req, res) => {
  UserModel.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  })
  .then((loggedInUser) => {
    res.redirect(`/user/profile/${loggedInUser.id}`);
  })
  .catch((err) => {
    res.redirect("/user");
  });
});

router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id, {
      res.render("user/profile.ejs", {
      }),
    });
  });

  router.put("/profile/:id", (req, res) => {
    UserModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    }).then((updatedUser) => {
      res.redirect(`/user/profile/${req.params.id}`);
    });
  });

  router.delete("/:id", (req, res) => {
    UserModel.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/user");
    });
  });
  
  module.exports = router;














  
// // GET USERS PROFILE
// router.get("/profile/:id", (req, res) => {
//     UserModel.findByPk(req.params.id, {
//       include: [
//         {
//           model: CourseModel,
//           attributes: ["id", "courseName"],
//         },
//       ],
//     }).then((userProfile) => {
//       res.render("users/profile.ejs", {
//         user: userProfile,
//       });
//     });
//   });

//    // SIGNUP //
// //  router.get("/signup", (req, res) => {
// //   res.render("users/signup.ejs");
// // });

// // router.post("/login", (req, res) => {
// //   UserrModel.findOne({ where: {username: req.body.username, password: req.body.password,
// //   } }).then((logInUser) => {
// //       res.redirect(`/users/profile/${logInUser.id}`);
// //   })
// //   .catch((err) => {
// //       res.redirect("/users");
// //   });
// // });


//   // UPDATE PROFILE - SEQUELIZE(.PUT) //
// router.put("/profile/:id", (req, res) => {
//     UserModel.update(req.body, {where: { id: req.params.id } }).then(() => {
//       res.redirect(`/users/profile/${req.params.id}`);
//     });
//   });
  
//   // DELETE USER ROUTE/PROFILE //
//   router.delete("/:id", (req, res) => {
//     UserModel.destroy({ where: { id: req.params.id } }).then(() => {
//       res.redirect("/");
//     });
//   });
  
//   module.exports = router;