exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('repository')
    table.string('description')
    table.integer('laborHours')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('products')
}
