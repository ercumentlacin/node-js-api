module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'users',
      user: 'admin',
      password: 'admin',
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {},
};
