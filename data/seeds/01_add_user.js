exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { id: 1, name: 'rowValue1' },
        { id: 2, name: 'rowValue2' },
        { id: 3, name: 'rowValue3' },
      ]);
    });
};
