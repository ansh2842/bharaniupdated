const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

  const token = req.header('Authorization');


  if (!token) {
    console.log(token);
    return res.status(400).json({ message: 'Authorization token is missing' });
  }

  try {

    const decoded = jwt.verify(token.replace('Bearer ', ''), 'bharani_token_key');


    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};