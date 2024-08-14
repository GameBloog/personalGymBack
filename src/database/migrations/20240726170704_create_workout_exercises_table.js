exports.up = function (knex) {
  return knex.schema.createTable("Workout_Exercises", (table) => {
    table.increments("id").primary()
    table
      .integer("workout_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Workouts")
      .onDelete("CASCADE")
    table
      .integer("exercise_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Exercises")
      .onDelete("CASCADE")
    table.integer("sets").notNullable()
    table.integer("reps").notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("Workout_Exercises")
}
