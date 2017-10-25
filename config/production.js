module.exports = {
  env: 'production',
  port: process.env.PORT,
  db: {
    dialect: 'postgres',
    uri: process.env.DATABASE_URL
  }
}
