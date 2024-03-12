require('dotenv/config');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { createServer } = require('http');

const app = express();
const connectDB = require('./config/db');
const coursesRouter = require('./routes/courses');
const enrollmentsRouter = require('./routes/enrollments');
const ordersRouter = require('./routes/orders');
const authRouter = require('./routes/auth');
const PORT = process.env.PORT || 8000;
const path = require('path');
const httpServer = createServer(app);

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/courses', coursesRouter);
app.use('/api/enrollments', enrollmentsRouter);
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

connectDB().then(() => {
  httpServer.listen(PORT);
  console.log('PORT:', PORT);
  // app.listen(PORT, () => console.log("🚀 PORT:", PORT));
});
