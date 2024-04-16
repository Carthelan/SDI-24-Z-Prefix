/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item').del();
  await knex('item').insert([
    {user_id: 1, item_name: 'Thing 1', description: 'Lorem ipsum dolor sit amet', quantity: 1},
    {user_id: 1, item_name: 'Thing 2', description: 'consectetur adipiscing elit', quantity: 2},
    {user_id: 1, item_name: 'Thing 3', description: 'Nam ac dignissim neque.', quantity: 3},
    {user_id: 2, item_name: 'Thing 4', description: 'In hac habitasse platea dictumst', quantity: 1},
    {user_id: 2, item_name: 'Thing 5', description: 'Ut pulvinar velit sed', quantity: 2},
    {user_id: 2, item_name: 'Thing 6', description: 'quam condimentum malesuada', quantity: 3},
    {user_id: 3, item_name: 'Thing 7', description: 'In volutpat libero quis nisi cursus', quantity: 1},
    {user_id: 3, item_name: 'Thing 8', description: 'non consequat felis volutpat', quantity: 2},
    {user_id: 3, item_name: 'Thing 9', description: 'Nunc pretium nisi quis felis elementum', quantity: 3},
  ]);
};

