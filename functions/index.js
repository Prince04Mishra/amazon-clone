const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const { async } = require("@firebase/util");
const stripe = require("stripe")(
  "sk_test_51L5cZFSFEl6y5cZNz3vfCqBUau9vDhKuFKrpTF9t1d164NPNmqeCqrxnk2POoskuVlTaVWoAlg2969B1hcDNxaVS00xi0N34qG"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount ", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, //submit of the currency
    currency: "usd",
  });

  //OK -- created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpiont
// http://localhost:5001/amozon-clone-3886c/us-central1/api
