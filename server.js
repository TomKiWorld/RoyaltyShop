const bodyParser = require('body-parser');
const compression = require('compression');
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
  app.use(compression());
  app.use(enforch.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if( error ) throw error;
  console.log(`Server running on port ${port}`);
});


app.post(`${process.env.PUBLIC_URL}/payment`, (req, res) => {
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
