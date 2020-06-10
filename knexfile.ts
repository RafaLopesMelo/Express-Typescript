module.exports = {
    client: 'sqlite3',
    connection: {
        filename: `${__dirname}/src/database/database.sqlite`
    },
    migrations: {
        directory: `${__dirname}/src/database/migrations`
    },
    useNullAsDefault: true
}