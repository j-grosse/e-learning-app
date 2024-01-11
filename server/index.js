require('dotenv/config');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const connectDB = require('./config/db');
const coursesRouter = require('./routes/courses');
const ordersRouter = require('./routes/orders');
const authRouter = require('./routes/auth');
const PORT = process.env.PORT || 8000;
const path = require('path');
const httpServer = createServer(app);
const io = new Server(httpServer);
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/courses', coursesRouter);
app.use('/api/orders', ordersRouter);
app.use('/auth', authRouter);

// DEPLOYMENT
// this need to be after all routes
if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  const buildPath = path.join(__dirname, '../client/dist');
  app.use(express.static(buildPath));

  app.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));
}

io.on('connection', (socket) => {
  socket.emit('open');
  console.log('connected');

  socket.on('newUser', (data) => {
    // Receive the usertype
    if (data === 'instructor') {
      socket.join('instructor');
      console.log('successfully join instructor');
    }
  });

  socket.on('message', (data) => {
    console.log(data);
    io.to('instructor').emit('neworder', data);
  });

  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});

connectDB().then(() => {
  httpServer.listen(PORT);
  // app.listen(PORT, () => console.log("🚀 ~ file: index.js:11 ~ PORT:", PORT));
});
