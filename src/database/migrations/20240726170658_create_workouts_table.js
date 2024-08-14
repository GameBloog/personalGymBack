exports.up = function (knex) {
  return knex.schema.createTable("Workouts", (table) => {
    table.increments("id").primary()
    table.string("name", 100).notNullable()
    table.text("description")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("Workouts")
}
