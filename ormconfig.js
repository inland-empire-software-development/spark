// We use this root-level config so that we can use the typeorm cli (for migrations) using `yarn typeorm`
module.exports = {
  type: "mysql",
  host: process.env.DBHOST,
  port: 3306,
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  entities: [
    "lib/entity/**/*entity.ts",
  ],
  migrations: [
    "lib/migration/**/*.ts",
  ],
  cli: {
    entitiesDir: "lib/entity",
    migrationsDir: "lib/migration",
  },
};
