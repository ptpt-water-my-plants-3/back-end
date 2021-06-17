require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'keep this a secret'
}