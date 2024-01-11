const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const authenticate = async (req, res, next) => {
  try {
    console.log('🚀 ~ file: auth.js:6 ~ authenticate ~ accessToken:', req.cookies.accessToken);
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
};

module.exports = authenticate;
