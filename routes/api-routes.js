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
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  // GET stats page
  app.get("/api/workouts/range", (req, res) => {
    //built off seed js
    const start = new Date().setDate(new Date().getDate() - 7);
    //$gte
    //$lte
    Workout.find({ day: { $gte: start, $lte: Date.now() } })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
