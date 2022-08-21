import knex from 'knex'
const env = process.env

const DATABASE = knex({
    client: 'mysql2',
    connection: {
        host     : env.DB_HOST,
        port     : env.DB_PORT,
        user     : env.DB_USER,
        password : env.DB_PASSWORD,
        database : env.DB_DATABASE
    }
})

export { DATABASE }
