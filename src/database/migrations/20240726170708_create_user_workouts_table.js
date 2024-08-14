exports.up = function (knex) {
  return knex.schema.createTable("User_Workouts", (table) => {
    table.increments("id").primary()
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Users")
      .onDelete("CASCADE")
    table
      .integer("workout_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Workouts")
      .onDelete("CASCADE")
    table
      .enu("day_of_week", [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ])
      .notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("User_Workouts")
}
