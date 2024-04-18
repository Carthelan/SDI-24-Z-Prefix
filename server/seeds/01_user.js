/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('user').del();
  await knex('user').insert([
        {first_name: 'Billy', last_name: 'Bob', username: 'Billybob123', password: 'nothing'},
        {first_name: 'Joe', last_name: 'Blow', username: 'Joeblow123', password: 'nothing'},
        {first_name: 'Big', last_name: 'Value', username: 'Bigvalue1', password: 'nothing'},
      ]);
    };
