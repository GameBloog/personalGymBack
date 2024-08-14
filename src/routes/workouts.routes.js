const { Router } = require("express")
const WorkoutsController = require("../controllers/WorkoutsController")

const workoutsRoutes = Router()
const workoutsController = new WorkoutsController()

workoutsRoutes.get("/", workoutsController.index)
workoutsRoutes.get("/:id", workoutsController.show)
workoutsRoutes.post("/", workoutsController.create)
workoutsRoutes.put("/:id", workoutsController.update)

module.exports = workoutsRoutes
