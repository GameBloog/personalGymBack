const knex = require("../database")

class ProgressController {
  async create(request, response) {
    const { user_id, exercise_id, weight, repetitions } = request.body

    await knex("progress").insert({
      user_id,
      exercise_id,
      weight,
      repetitions,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    })

    return response
      .status(201)
      .json({ message: "Progress recorded successfully" })
  }

  async index(request, response) {
    const { user_id } = request.params

    const progress = await knex("progress")
      .where({ user_id })
      .orderBy("date", "desc")

    return response.json(progress)
  }
}

module.exports = ProgressController
