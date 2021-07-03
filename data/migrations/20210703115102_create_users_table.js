exports.up = function (knex) {
  return knex.schema
    .createTable('user', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamps();
    })
    .createTable('club', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamps();
    })
    .createTable('user_club', (table) => {
      table.increments();
      table.integer('club_id').unsigned();
      table.integer('user_id').unsigned();
      table
        .foreign('user_id')
        .references('user.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .foreign('club_id')
        .references('club.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('user_club')
    .dropTableIfExists('club')
    .dropTableIfExists('user');
};
