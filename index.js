require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');

const app = express();
const port = 3010;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to database');
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1);
  }
};


connectDB();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});