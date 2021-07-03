exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_club')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user_club').insert([
        { club_id: 1, user_id: 1 },
        { club_id: 2, user_id: 2 },
        { club_id: 3, user_id: 3 },
      ]);
    });
};
