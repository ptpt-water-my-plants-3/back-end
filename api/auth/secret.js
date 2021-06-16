// setting secret for web token
module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'authorized personnel only'
}