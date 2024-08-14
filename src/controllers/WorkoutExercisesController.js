const knex = require("../database")

class WorkoutExercisesController {
  async index(request, response) {
    const { workout_id } = request.params
    const exercises = await knex("workout_exercises")
      .join("exercises", "workout_exercises.exercise_id", "=", "exercises.id")
      .where("workout_exercises.workout_id", workout_id)
      .select("exercises.*")

    return response.json(exercises)
  }

  async create(request, response) {
    const { workout_id, exercise_id } = request.body

    await knex("workout_exercises").insert({
      workout_id,
      exercise_id,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    })

    return response.status(201).json()
  }

  async delete(request, response) {
    const { id } = request.params
    await knex("workout_exercises").where({ id }).delete()
    return response.status(204).send()
  }
}

module.exports = WorkoutExercisesController
