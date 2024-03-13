const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const authenticate = async (req, res, next) => {
  try {
    if (req.cookies.accessToken) {
      const user = await jwt.verify(req.cookies.accessToken, SECRET);
      req.user = user;
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  } catch (error) {
    next(error);
  }
  // console.log(
  //   '🚀 ~ file: middleware/auth.js ~ accessToken:',
  //   req.cookies.accessToken
  // );
  console.log();
};

module.exports = authenticate;
