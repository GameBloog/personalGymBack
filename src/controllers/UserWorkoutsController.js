const knex = require("../database")

class UserWorkoutsController {
  async index(request, response) {
    const { user_id } = request.params
    const userWorkouts = await knex("user_workouts")
      .join("workouts", "user_workouts.workout_id", "=", "workouts.id")
      .where("user_workouts.user_id", user_id)
      .select("workouts.*", "user_workouts.day_of_week")

    return response.json(userWorkouts)
  }

  async create(request, response) {
    const { user_id, workout_id, day_of_week } = request.body

    await knex("user_workouts").insert({
      user_id,
      workout_id,
      day_of_week,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    })

    return response.status(201).json()
  }

  async delete(request, response) {
    const { id } = request.params
    await knex("user_workouts").where({ id }).delete()
    return response.status(204).send()
  }
}

module.exports = UserWorkoutsController
