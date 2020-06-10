import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.timestamps(true, true);
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}