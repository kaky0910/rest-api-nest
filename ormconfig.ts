module.exports = {
  seeds: ['src/seeds/*{.ts,.js}'],
  entities: ['src/**/entities/*.entity{.ts,.js}'],
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_INSTANCE,
};
