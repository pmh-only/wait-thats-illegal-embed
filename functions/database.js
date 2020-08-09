const knex = require('knex')
const db = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'embedmaker',
    database: 'embedmaker'
  }
})

module.exports = db
