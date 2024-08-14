const { Router } = require("express")

const usersRouter = require("./users.routes")
const sessionsRouter = require("./sessions.routes")
const exercisesRouter = require("./exercises.routes")
const groupRouter = require("./group.routes")
const historyRouter = require("./history.routes")
const workoutsRouter = require("./workouts.routes")
const workoutExercisesRouter = require("./workout_exercises.routes")
const userWorkoutsRouter = require("./user_workouts.routes")

const routes = Router()

routes.use("/users", usersRouter)
routes.use("/sessions", sessionsRouter)
routes.use("/exercises", exercisesRouter)
routes.use("/groups", groupRouter)
routes.use("/history", historyRouter)
routes.use("/workouts", workoutsRouter)
routes.use("/workout-exercises", workoutExercisesRouter)
routes.use("/user-workouts", userWorkoutsRouter)

module.exports = routes
