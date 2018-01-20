exports.up = function (knex, Promise) {
    return knex.schema.createTable('templates', table => {
        table.increments()
        table.integer('owner_id')
        table.jsonb('template_object').notNullable().defaultsTo(JSON.stringify({name: 'unfinished_api', resources: []}))
        table.boolean('public').defaultsTo(true)
        table.string('name').notNullable().defaultsTo('Unnamed Template')
        table.text('md_description').defaultsTo('')
        table.timestamps(true, true)

        table.foreign('owner_id').references('users.id').onDelete('CASCADE')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('templates')
}