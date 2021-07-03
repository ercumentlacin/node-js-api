const db = require('./db-config');

module.exports = {
  findUser,
  addUser,
  updateUser,
  deleteUser,
  findUserById,
};

function findUser() {
  return db('user');
}

function addUser(newUser) {
  return db('user')
    .insert(newUser, 'id')
    .then(([id]) => {
      return db('user').where({ id }).first();
    });
}

function updateUser(updatedUser, id) {
  return db('user')
    .update(updatedUser)
    .where({ id })
    .then((updated) => {
      if (updated) {
        return db('user').where({ id }).first();
      }
    });
}

function deleteUser(id) {
  return db('user').del().where({ id });
}

function findUserById(id) {
  return db('user').where({ id }).first();
}
