const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../auth/secret');

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if(!token){
    res.status(404).json({message: 'Missing token '})
  }else{
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if(err){
        res.status(401).json({message: 'Invalid token: ' + err.message})
      }else{
        req.decodedToken = decoded;
        next();
      }
    })
  }
}