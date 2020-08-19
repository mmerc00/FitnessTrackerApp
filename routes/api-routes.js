module.exports = {
  Workout: require("Workout"),
};
//THINK CRUD

//create workout post
app.post("/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(({ _id }) =>
      db.Library.findOneAndUpdate(
        {},
        { $push: { workout: _id } },
        { new: true }
      )
    )
    .then((dbLibrary) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
//add workout put

//retrieve workouts? get
