exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, username: 'admin', email: 'cmunkydev@gmail.com', password: '$2a$10$GFHMA5umKUsdGTuJ50MCgeHb809OWA26NIw/xEvRkZ.5TaKOjHdg6'},
        { id: 2, username: 'user', email: 'fake@email.org', password: '$2a$10$GFHMA5umKUsdGTuJ50MCgeHb809OWA26NIw/xEvRkZ.5TaKOjHdg6'},
        { id: 3, username: 'joe', email: 'joe@strummer.net', password: '$2a$10$GFHMA5umKUsdGTuJ50MCgeHb809OWA26NIw/xEvRkZ.5TaKOjHdg6'}
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
    })
}
