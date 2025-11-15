// In /server/server.js

const express = require('express');
const sequelize = require('./db');

const User = require('./models/user'); 
const passport = require('passport');
const jwt = require('jsonwebtoken');

require('dotenv').config();
require('./authentication.js'); 

const app = express();

const PORT = process.env.PORT || 8080; 

async function setupDatabase() {
  try {
    await sequelize.authenticate();
    console.log('The connection with the database is a success.');
    await sequelize.sync({ alter: true });
    console.log('Models have been synchronized with the database.');
  } catch (error) {
    console.error('Error connecting/syncing with the database: ', error);
  }
}


app.get('/api/auth/google',
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    session: false 
  })
);

app.get('/api/auth/google/callback', 
  passport.authenticate('google', { 
   
    failureRedirect: 'http://localhost:5173/login?error=true',
    session: false 
  }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user.id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
   
    res.redirect(`http://localhost:5173/auth-success?token=${token}`);
  }
);

app.listen(PORT, () => {
  console.log(`The server is on port ${PORT}`);
  setupDatabase(); 
});