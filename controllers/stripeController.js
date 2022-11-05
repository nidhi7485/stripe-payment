const stripe = require('stripe').config()
const stripeController = async (req, res) => {
  console.log(req.body)
  res.send('stripe payment')
}
module.exports = stripeController
