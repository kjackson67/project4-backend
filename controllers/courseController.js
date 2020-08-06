const express = require("express");
const db = require("../models");
const router = express.Router();

// Add model //
const CourseModel = require("../models").Course;
const UserModel = require("../models").User;
// const RoundModel = require("../models").Round;

     //  NEW ROUTE - EMPTY FORM   // 
router.get("/new", (req, res) => {
    res.render("new.ejs");
});

// Index = Render/Get all courses //
router.get("/", (req, res) => {
    CourseModel.findAll().then((allCourseFromDB) => {                 // *** // CourseModel.findAll().then((allCourseFromDB) => {
        res.render("index.ejs", {
        courses: allCourseFromDB,                                        
        });
    });
});

router.get("/:id", (req, res) => {
    CourseModel.findByPk(req.params.id, {
        include: [{
            model: Player,
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

// Create New "POST" Route - render "Create" W/SEQUELIZE  //
router.post("/", (req, res) => {                                    // if (req.body.readyToEat === "on") {
    CourseModel.create(req.body).then((newCourse) => {              //   req.body.readyToEat = true;
    res.redirect("/courses");                                       //   req.body.readyToEat = false;
    });                                                             // }
});


//  NEW ROUTE - EMPTY FORM   // 
router.get("/new", (req, res) => {
    res.render("new.ejs");
  });


router.get("/:id/edit", function (req, res) {
    CourseModel.findByPk(req.params.id).then((courseToEdit) => {
      res.render("edit.ejs", {                                            // RoundModel.findAll().then((allRounds) => {
        course: courseToEdit,
        });
    });                                          
});
                

router.put('/:id', (req, res) => {
    CourseModel.update(req.body, { where: { id: req.params.id },
    returning: true, 
}).then((updatedCourse) => {
    console.log(updatedCourse);
        res.redirect("/courses");
        }
    );
});


router.delete("/:id", (req, res) => {
    CourseModel.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/courses");
    });
  });

module.exports = router;                  

    
        

    