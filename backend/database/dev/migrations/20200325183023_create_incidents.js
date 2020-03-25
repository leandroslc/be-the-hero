/**
 * @typedef {import('knex')} Knex
 */

const tableName = 'incidents';

/**
 * @param {Knex} knex
 */
exports.up = function(knex) {
  return knex.schema
    .createTable(tableName, function (table) {
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      table.string('ngo_id').notNullable();

      table.foreign('ngo_id').references('id').inTable('ngos');
    });
};

/**
 * @param {Knex} knex
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable(tableName);
};
