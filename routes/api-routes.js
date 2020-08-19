const db = require("../models");
const Workout = db.Workout;

module.exports = function (app) {
  //create workout post
  app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //add workout put
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //retrieve workouts? get
  app.get("/api/workouts", (req, res) => {
    //  grabbing it from database
    //  populate properties array
    //  populate("librarians")- chain populates with models
    //  .populate("exercises") // only if relating to different table named exercises
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
