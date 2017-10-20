module.exports = {
  env: 'test',
  port: 0, // Random port for test
  databaseUrl: process.env.DATABASE_URL || 'postgresql://localhost/code_central_test'
}
