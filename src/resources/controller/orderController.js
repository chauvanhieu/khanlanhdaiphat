const Order = require("../model/orders");

class OrderController {
  async index(req, res) {
    const {
      product_id,
      customer_name,
      customer_address,
      customer_phoneNumber,
    } = req.body;

    await Order.create({
      product_id,
      customer_name,
      customer_address,
      customer_phoneNumber,
    });
    res.redirect(req.headers.referer);
  }
}

module.exports = new OrderController();
