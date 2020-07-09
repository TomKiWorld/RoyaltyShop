const bodyParser = require('body-parser');
const cors = require('cors');
const enforch = require('express-sslify');
const express = require('express'); 
const path = require('path');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(enforch.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'service-worker.js'));
});

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'favicon.ico'));
});

app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'manifest.json'));
});

app.post('/payment', (req, res) => {
  const { token, amount } = req.body
  if (token.id && amount ) {
    const body = {
      source: token.id,
      amount: amount,
      currency: 'eur'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json({ error: stripeErr })
      } else {
        res.status(200).json({ success: stripeRes })
      }
    })
  } else {
    res.status(500).json({error: 'Could not complete the transaction - Missing information'})
  }
});

app.listen(port, error => {
  if( error ) throw error;
  console.log(`Server running on port ${port}`);
});
