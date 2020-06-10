import knex from 'knex';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: `${__dirname}/database.sqlite`
    },
    migrations: {
        directory: `${__dirname}/migrations`
    },
    useNullAsDefault: true
});

export default connection;