let md = require('../dummydata/fakemd')
let tempObj = require('../dummydata/templates.js')
let ezObj = tempObj[0]
let medObj = tempObj[1]
let hardObj = tempObj[2]

exports.seed = function(knex, Promise) {
  return knex('templates').del()
    .then(function () {
      return knex('templates').insert([
        { id: 1, owner_id: 1, public: true, name: 'CMunky\'s API', md_description: md, template_object: ezObj},
        { id: 2, owner_id: 2, public: true, name: 'fake\'s API', md_description: md, template_object: medObj},
        { id: 3, owner_id: 3, public: false, name: 'JOE\'s SECRET API', md_description: md, template_object: hardObj}
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('templates_id_seq', (SELECT MAX(id) FROM templates));`)
    })
}
