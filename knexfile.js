// Update with your config settings.
const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/api_dev',
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'database', 'seeds')
    }
  },

  
  production: {
    client: 'pg',
    connection: process.env.DATBASE_URL,
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'database', 'seeds')
    }
  }

};
