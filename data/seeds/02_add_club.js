exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('club')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('club').insert([
        { id: 1, name: 'juventus' },
        { id: 2, name: 'real madrid' },
        { id: 3, name: 'barcelone' },
      ]);
    });
};
