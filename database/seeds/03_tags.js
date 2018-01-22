
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {id: 1, colName: 'tag1'},
        {id: 2, colName: 'tag2'},
        {id: 3, colName: 'tag3'}
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags));`)
    })
}
