exports.up = function(knex, Promise) {
  return knex.schema.createTable('templates_tags', table => {
      table.integer('template_id').notNullable()
      table.integer('tag_id').notNullable()
      table.foreign('template_id').references('templates.id').onDelete('CASCADE')
      table.foreign('tag_id').references('tags.id').onDelete('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('templates_tags')
}
