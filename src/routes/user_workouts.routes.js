const { Router } = require("express")
const UserWorkoutsController = require("../controllers/UserWorkoutsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const userWorkoutsRoutes = Router()
const userWorkoutsController = new UserWorkoutsController()

userWorkoutsRoutes.use(ensureAuthenticated)

userWorkoutsRoutes.get("/:user_id", userWorkoutsController.index)
userWorkoutsRoutes.post("/", userWorkoutsController.create)
userWorkoutsRoutes.delete("/:id", userWorkoutsController.delete)

module.exports = userWorkoutsRoutes
