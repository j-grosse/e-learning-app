require('dotenv/config');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { createServer } = require('http');

const app = express();
const connectDB = require('./config/db');

const authRouter = require('./routes/auth');
const coursesRouter = require('./routes/courses');
const lessonsRouter = require('./routes/lessons');
const enrollmentsRouter = require('./routes/enrollments');
const ordersRouter = require('./routes/orders');

const PORT = process.env.PORT || 8000;
const path = require('path');
const httpServer = createServer(app);

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/lessons', lessonsRouter);
app.use('/api/enrollments', enrollmentsRouter);
app.use('/api/orders', ordersRouter);

// DEPLOYMENT
// this needs to be placed after all the routes above
//* Set up static folder in production
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '../client/dist');
  app.use(express.static(buildPath));
  app.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));
}

connectDB().then(() => {
  // app.listen(PORT, () => console.log("🚀 PORT:", PORT));
  httpServer.listen(PORT);
  console.log('PORT:', PORT);
});
