const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema(
  {
    userType: {
      type: String,
      default: 'customer',
      required: [true, 'userType is required'],
    },
    company: { type: String, default: 'company' },
    firstName: {
      type: String,
      default: 'firstname',
      required: [true, 'firstname is required'],
    },
    lastName: {
      type: String,
      default: 'lastName',
      required: [true, 'lastname is required'],
    },
    username: { type: String, required: [true, 'username is Required!'] },
    address: { type: String, default: 'address' },
    zipcode: {
      type: Number,
      default: 0,
      required: [true, 'zipcode is required'],
    },
    city: {
      type: String,
      default: 'city',
      required: [true, 'city is required'],
    },
    phone: {
      type: Number,
      default: 0,
      required: [true, 'phone is required'],
    },
    image: { type: String },
    email: {
      type: String,
      required: [true, 'email is Required!'],
    },

    password: {
      type: String,
      minLength: [8, 'Password Must Be 8 characters or more!'],
      required: [true, 'Password is Required!'],
    },
  },
  {
    timestamps: true,
  }
);

userSchema
  .virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

userSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password need to match!');
  }
  next();
});
userSchema.pre('save', async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 6);
    console.log('🚀 ~ file: user.js:32 ~ hashedPassword:', hashedPassword);
    console.log('PASSWORD', this.password);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log('HASHING ERROR!!', error);
  }
});

const model = mongoose.model('User', userSchema);
module.exports = model;
