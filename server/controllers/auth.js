const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'your-secret-key';
const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

const register = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log('🚀 ~ file: auth.js:9 ~ register ~ newUser:', newUser);
    // JWT Creation
    const user = {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      userType: newUser.userType,
    };
    //user is the payload
    const accessToken = jwt.sign(user, SECRET);
    res
      .status(201)
      .cookie('accessToken', accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDayInMilliseconds),
        sameSite: 'none',
        secure: true,
      })
      .json({ message: 'user created!', user });
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'Invalid login attempt' });
  }
  try {
    // Do we have the user?
    const currentUser = await User.findOne({ email });
    if (!currentUser) {
      res.status(400).json({ message: 'Invalid login attempt' });
    } else {
      // WE HAVE A USER!!
      console.log(
        '🚀 ~ file: auth.js: ~ login ~ currentUser password hash:',
        currentUser.password,
        password
      );
      // IS THE PASSWORD MATCHING???
      const isPasswordValid = await bcrypt.compare(
        password,
        currentUser.password
      );
      if (!isPasswordValid) {
        res.status(400).json({ message: 'Invalid login attempt' });
      } else {
        // WE HAVE A USER and all is good
        const user = {
          _id: currentUser._id,
          username: currentUser.username,
          email: currentUser.email,
          userType: currentUser.userType,
        };
        const accessToken = jwt.sign(user, SECRET);
        res
          .cookie('accessToken', accessToken, {
            httpOnly: true,
            expires: new Date(Date.now() + oneDayInMilliseconds),
            sameSite: 'none',
            secure: true,
          })
          .json({ message: 'user logged in Successfully!', user });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message, errors: error.errors });
  }
};

const logout = (req, res) => {
  res.clearCookie('accessToken');
  res.json({ message: 'user logged out Successfully' });
};

const getLoggedinUser = async (req, res) => {
  // console.log('🚀 ~ file: controllers/auth.js:88 ~ getLoggedinUser:', req.user.username);
  try {
    const user = await User.findOne({ _id: req.user._id }).select(
      '_id email username userType firstName lastName address zipcode city phone'
    );
    res.json({ user });
    console.log('🚀 ~ file: auth.js:95 ~ getLoggedinUser:', req.user.username);
  } catch (error) {
    console.log('🚀 ~ file: auth.js:97 ~ no user is logged in', error);

    res.json({ message: error.message });
  }
};

const updateUserInfo = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedUser = await User.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    if (!updatedUser) {
      res.status(404).json({ message: 'User Not Found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  getLoggedinUser,
  updateUserInfo,
};
