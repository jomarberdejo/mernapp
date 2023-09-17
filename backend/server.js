// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes'); // Your data routes
const usersRoutes = require('./routes/userRoutes'); // New user routes

const app = express();

app.use(express.json());
app.use(cors());

// Log incoming requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    app.listen(process.env.PORT, () => {
      console.log('Listening for requests on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

// Use your data routes
app.use('/api/data', dataRoutes);

// Use your user routes
app.use('/api/users', usersRoutes);

