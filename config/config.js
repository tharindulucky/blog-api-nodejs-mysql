const dotenv = (require("dotenv").config()).parsed

let config = {
    "username": process.env['DB_USERNAME'],
    "password": process.env['DB_PASSWORD'],
    "database": process.env['DB_NAME'],
    "host": process.env['DB_HOST'],
    "dialect": "mysql"
}

module.exports = {
  development: config,
  test: config,
  production: config
}