const jwt = require("jsonwebtoken");
const User = require("../models/user");

const verifyToken = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    const token = req.headers.authorization.split(' ')[1];
    
    jwt.verify(token, process.env.API_SECRET || 'fallback_secret_key', (err, decoded) => {
      if (err) {
        req.user = undefined;
        next(); // Proceed to the next middleware or route handler
      } else {
        User.findOne({ _id: decoded.id })
          .then(user => {
            req.user = user; // Set req.user with the user object
            next(); // Proceed to the next middleware or route handler
          })
          .catch(err => {
            // Handle database query error
            res.status(500).send({ message: err.message || "An error occurred while fetching user data" });
          });
      }
    });
  } else {
    req.user = undefined;
    next(); // Proceed to the next middleware or route handler
  }
};

module.exports = verifyToken;
