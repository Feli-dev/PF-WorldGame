const express = require('express');
const Stripe = require('stripe');
const { STRIPE_SECRET_KEY } = process.env;
const router = express.Router();

const stripe = Stripe(STRIPE_SECRET_KEY);

router.post('/', async (req, res) => {
    try {
        const { premiumLevel } = req.body;
        if (!premiumLevel) {
            return res.status(400).json({ message: 'Please enter the level of your premium service.' });
        }
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 500,
            currency: 'usd',
            payment_method_types: ["card"],
            metadata: { premiumLevel },
        });

        const clientSecret = paymentIntent.client_secret;
        res.json({ msg: "Successful payment", clientSecret })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' })
    }
});

module.exports = router