exports.seed = function (knex, Promise) {
  let tableOrder = ['templates', 'users']

  let promiseList = tableOrder.map(table => {
    return knex(table).del()
  })

  Promise.all(promiseList)
    .then(() => {
      console.log('Table data expunged')
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
}