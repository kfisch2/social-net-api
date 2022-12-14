const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-net-api',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// log mongoose queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Currently listening on ${PORT}`));
