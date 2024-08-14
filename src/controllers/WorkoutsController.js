const knex = require("../database")

class WorkoutsController {
  async index(request, response) {
    const workouts = await knex("workouts").orderBy("name")
    return response.json(workouts)
  }

  async show(request, response) {
    const { id } = request.params
    const workout = await knex("workouts").where({ id }).first()
    return response.json(workout)
  }

  async create(request, response) {
    const { name, description } = request.body

    const [id] = await knex("workouts").insert({
      name,
      description,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    })

    return response.status(201).json({ id })
  }

  async update(request, response) {
    const { id } = request.params
    const { name, description } = request.body

    const updated_at = knex.fn.now()

    await knex("workouts").where({ id }).update({
      name,
      description,
      updated_at,
    })

    return response.status(200).json({ id })
  }
}

module.exports = WorkoutsController
