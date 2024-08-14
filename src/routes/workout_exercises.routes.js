const { Router } = require("express")
const WorkoutExercisesController = require("../controllers/WorkoutExercisesController")

const workoutExercisesRoutes = Router()
const workoutExercisesController = new WorkoutExercisesController()

workoutExercisesRoutes.get(
  "/:workout_id/exercises",
  workoutExercisesController.index
)
workoutExercisesRoutes.post("/", workoutExercisesController.create)
workoutExercisesRoutes.delete("/:id", workoutExercisesController.delete)

module.exports = workoutExercisesRoutes
