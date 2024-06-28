const express = require('express');
const mongoose = require('mongoose');
const Data = require('./modelSchema'); // Import the model

const app = express();
const port = 3000;


const uri = 'mongodb://localhost:27017/Table-Assignment';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON bodies
app.use(express.json());

// Controller to fetch all data
app.get('/data', async (req, res) => {
  try {
    const data = await Data.find();
    // res.json(data);
    console.log(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);

});
