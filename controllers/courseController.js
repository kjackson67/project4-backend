const express = require("express");
const router = express.Router();

// Add model //
const CourseModel = require("../models").Course;
const UserModel = require("../models").User;
const RoundModel = require("../models").Round;

// Index = Render/Get all courses //
// router.get("/", (req, res) => {
//     res.render("index.ejs", {           // *** // CourseModel.findAll().then((allCourseFromDB) => {
//     });
// });                                    // *** // course: allCourseFromDB,
        

//  NEW ROUTE - EMPTY FORM   // 
// router.get("/new", (req, res) => {
//     res.render("new.ejs");
//   });

// Create New "POST" Route - render "Create" W/SEQUELIZE  //
// router.post("/", (req, res) => {                                    // if (req.body.readyToEat === "on") {
//     CourseModel.create(req.body).then((newCourse) => {              //   req.body.readyToEat = true;
//     res.redirect("/courses");                                       //   req.body.readyToEat = false;
//     });                                                             // }
// });

router.get("/:id/edit", function (req, res) {
    CourseModel.findByPk(req.params.id).then((courseToEdit) => {
        res.render("edit.ejs", {            // RoundModel.findAll().then((allRounds) => {
                rounds: courseToEdit,
            });
        });
    });

// router.get("/:id", (req, res) => {
//     CourseModel.findByPk(req.params.id, {
//         include: [{
//             model: User,
//             attribute: ["name"],
//         },
//         {
//             model: Round,
//         },
//         ],
//             attributes: ["name", "location", "par", "img", "userId"]
//     })
//     .then(course => {
//         console.log(course)
//         res.render("show.ejs", {
//             course: course
//         });
//     });
// });

// router.put('/:id', (req, res) => {
//     CourseModel.update(req.body, {where: {id: req.params.id },
//         returning: true,
//   }).then((updatedCourse) => {
//         res.redirect("/course");
//         });
//     });


// router.delete("/:id", (req, res) => {
//     CourseModel.destroy({ where: { id: req.params.id } }).then(() => {
//       res.redirect("/courses");
//     });
//   });

module.exports = router;                  

    
        

    