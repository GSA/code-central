module.exports = {
  env: 'development',
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL || 'postgresql://localhost/code_central_development'
}
