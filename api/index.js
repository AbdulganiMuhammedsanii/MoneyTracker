const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
  res.json("test ok3");
});

app.post('/api/transaction', async (req, res) => {
  await mongoose.connect(proces.env.MONGO_URL);
  const { name, description, datetime, price } = req.body;
  const transaction = await Transaction.create({
    name, description, datetime, price
  });
  res.json(transaction);
});

const PORT = process.env.PORT || 3015;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// zJwviyZlQS5LgwiR
