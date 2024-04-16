/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user'), table => {
        table.increments('id')
        table.string('First Name')
        table.string('Last Name')
        table.string('Username')
        table.string('Password(Encrypted)')
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
