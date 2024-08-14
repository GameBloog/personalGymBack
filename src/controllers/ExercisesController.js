const knex = require("../database")

class ExercisesController {
  async index(request, response) {
    const { group } = request.params

    const exercises = await knex("exercises").where({ group }).orderBy("name")

    return response.json(exercises)
  }

  async show(request, response) {
    const { id } = request.params

    const exercise = await knex("exercises").where({ id }).first()

    return response.json(exercise)
  }

  async create(request, response) {
    const { name, series, repetitions, group, demo, thumb } = request.body

    const [id] = await knex("exercises").insert({
      name,
      series,
      repetitions,
      group,
      demo,
      thumb,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    })

    return response.status(201).json({ id })
  }

  async update(request, response) {
    const { id } = request.params
    const { name, series, repetitions, group, demo, thumb } = request.body

    const updated_at = knex.fn.now()

    await knex("exercises").where({ id }).update({
      name,
      series,
      repetitions,
      group,
      demo,
      thumb,
      updated_at,
    })

    return response.status(200).json({ id })
  }
}

module.exports = ExercisesController
