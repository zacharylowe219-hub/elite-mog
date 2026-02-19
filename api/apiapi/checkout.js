import Stripe from "stripe";

export default async function handler(req, res) {

try {

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const session = await stripe.checkout.sessions.create({

payment_method_types: ["card"],

line_items: [
{
price_data: {
currency: "usd",
product_data: {
name: "ELITE MOG Session"
},
unit_amount: 3000
},
quantity: 1
}
],

mode: "payment",

success_url: "https://elite-mog.vercel.app",
cancel_url: "https://elite-mog.vercel.app",

});

res.status(200).json({ id: session.id });

} catch (error) {

res.status(500).json({ error: error.message });

}

}

