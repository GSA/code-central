module.exports = {
  env: 'test',
  port: 0, // Random port for test
  db: {
    dialect: 'postgres',
    uri: process.env.DATABASE_URL || 'postgresql://localhost/code_central_test'
  }
}
