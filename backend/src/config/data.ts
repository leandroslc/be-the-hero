
const devDatabaseDirectory = './database/dev';

export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `${devDatabaseDirectory}/dev.sqlite`,
    },
    migrations: {
      directory: `${devDatabaseDirectory}/migrations`,
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: `${devDatabaseDirectory}/test.sqlite`,
    },
    migrations: {
      directory: `${devDatabaseDirectory}/migrations`,
    },
    useNullAsDefault: true,
  },
};
