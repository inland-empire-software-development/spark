module.exports = {
  type: "mysql",
  host: process.env.DBHOST,
  port: 3306,
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  // synchronize: process.env.NODE_ENV === "development",
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
