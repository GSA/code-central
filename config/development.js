module.exports = {
  env: 'development',
  port: process.env.PORT || 3000,
  db: {
    dialect: 'postgres',
    uri: process.env.DATABASE_URL || 'postgresql://localhost/code_central_development'
  }
}
