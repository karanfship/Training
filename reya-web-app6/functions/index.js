const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51K8qQbSEV0LXLDfCdnbPe2ljdnOQEh8gzb8foQCVYTX6y0PU0MSYWq75IxyHbLN1gpcVzaWZL0p9VwynuqLGK8mP000drXyzwE"
);

//API

//AP Config
const app = express();

//Middleware
app.use(cors({orignin: true}));
app.use(express.json());

//API Route
app.get("/", (request, response) => response.status(200).send("hello world!"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved for amount >>>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  console.log("Payment", paymentIntent);

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//API Listen Command
exports.api = functions.https.onRequest(app);
