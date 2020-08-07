const express = require("express");
const db = require("../models");
const router = express.Router();

const CourseModel = require("../models").Course;
const UserModel = require("../models").User;


router.get("/", (req, res) => {
    CourseModel.findAll().then((courses) => {                 // *** // CourseModel.findAll().then((allCourseFromDB) => {
        res.render("index.ejs", {
        courses: courses                                        
        });
    });
});

router.get("/:id", (req, res) => {
    CourseModel.findByPk(req.params.id, {
        include: [{
            model: User,
            attributes: ["name"],
        },
        ],
    })
    .then((course) => {
        console.log(course)
        res.render("show.ejs", {
            course: course,
        });
    });
  });
  
  router.get("/new", (req, res) => {
    res.render("new.ejs");
  });


router.get("/:id/edit", function (req, res) {
    CourseModel.findByPk(req.params.id).then((foundCourse) => {
      res.render("edit.ejs", {                                            // RoundModel.findAll().then((allRounds) => {
        course: foundCourse,
        });
    });                                          
});
                

router.put('/:id', (req, res) => {
    CourseModel.update(req.body, { where: { id: req.params.id } })
  .then((updatedCourse) => {
        res.redirect("/course");
        }
    );
});


router.delete("/:id", (req, res) => {
    CourseModel.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/course");
    });
  });
  
  router.put("/:id", (req, res) => {
    CourseModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    }).then((updatedCourse) => {
      console.log(updatedCourse);
      res.redirect("/course");
    });
  });
  
  module.exports = router;



// // Add model //
// const CourseModel = require("../models").Course;
// const UserModel = require("../models").User;
// // const RoundModel = require("../models").Round;

// // router.get("/:index", (req, res) => {
// //     console.log(req.params.index);
// //     res.render("show.ejs", {
// //     course: course[req.params.index],
// //     index: req.params.index
// //     });
// // });


// // Index = Render/Get all courses //
// router.get("/", (req, res) => {
//     CourseModel.findAll().then((allCoursesFromDB) => {                 // *** // CourseModel.findAll().then((allCourseFromDB) => {
//         res.render("index.ejs", {
//         course: allCoursesFromDB,                                        
//         });
//     });
// });

//      //  NEW ROUTE - EMPTY FORM   // 
//      router.get("/new", (req, res) => {
//         res.render("new.ejs");
//     });
    
//     // Create New "POST" Route - render "Create" W/SEQUELIZE  //
// router.post("/", (req, res) => {                                    // if (req.body.readyToEat === "on") {
//     CourseModel.create(req.body).then((newCourse) => {              //   req.body.readyToEat = true;
//     res.redirect("/course");                                       //   req.body.readyToEat = false;
//     });                                                             // }
// });

// router.put('/:id', (req, res) => {
//     console.log(req.body);
//     CourseModel.update(req.body, { where: { id: req.params.id },
//     returning: true, 
//     }).then((updatedCourse) => {
//         User.findByPk(req.body.season).then((foundUser) => {
//             Course.findByPk(req.params.id).then((foundCourse) => {
//                 foundCourse.addCourse(foundUser);
//                 res.redirect("/course");
//             });
//         });
//     });
// });

// router.delete("/:id", (req, res) => {
//     CourseModel.destroy({ where: { id: req.params.id } }).then(() => {
//       res.redirect("/courses");
//     });
//   });

//   router.get("/:id/edit", function (req, res) {
//     CourseModel.findByPk(req.params.id).then((foundCourse) => {
//         // User.findAll().then((allUsers) => {                                  // RoundModel.findAll().then((allRounds) => {
//             res.render("edit.ejs", {
//                 course: foundcourse,
//                 // users: allUsers,
//             });
//         });
//     });                                          
// // });


// router.get("/:id", (req, res) => {
//     CourseModel.findByPk(req.params.id, {
//         include: [{
//             model: User,
//             attributes: ["name"],
//         },
//         ],
//     })
//     .then((course) => {
//         console.log(course)
//         res.render("show.ejs", {
//             course: course,
//         });
//     });
// });


// //  NEW ROUTE - EMPTY FORM   // 
// // router.get("/new", (req, res) => {
// //     res.render("new.ejs");
// //   });

// module.exports = router;                  

    
        

    