/**
 * @typedef {import('knex')} Knex
 */

const tableName = 'ngos';

/**
 * @param {Knex} knex
 */
exports.up = function(knex) {
  return knex.schema
    .createTable(tableName, function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
    });
};

/**
 * @param {Knex} knex
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable(tableName);
};
