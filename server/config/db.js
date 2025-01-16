const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('CONNECTION', process.env.MONGODB_ATLAS_CONNECTION_STRING);
    const connectionString = process.env.MONGODB_ATLAS_CONNECTION_STRING;
    if (!connectionString) {
      throw new Error('MONGODB_ATLAS_CONNECTION_STRING is not defined');
    }
    await mongoose.connect(connectionString);
    console.log('MONGODB CONNECTED SUCCESSFULLY!!!');
  } catch (error) {
    console.log('MONGODB CONNECTION ERROR', error);
    process.exit(1);
  }
};

module.exports = connectDB;
