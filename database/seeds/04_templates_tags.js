
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('templates_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('templates_tags').insert([
        { template_id: 1, tag_id: 1 },
        { template_id: 1, tag_id: 3 },
        { template_id: 2, tag_id: 2 },
        { template_id: 2, tag_id: 1 },
        { template_id: 3, tag_id: 3 }
      ]);
    })
}