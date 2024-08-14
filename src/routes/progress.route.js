const { Router } = require("express")

const ProgressController = require("../controllers/ProgressController")

const progressRoutes = Router()
const progressController = new ProgressController()

progressRoutes.post("/", progressController.create)
progressRoutes.get("/:user_id", progressController.index)

module.exports = progressRoutes
