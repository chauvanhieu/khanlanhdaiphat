const Order = require("../../model/orders");
const Sequelize = require("sequelize");
const Product = require("../../model/products");

class AdminOrderController {
  async index(req, res) {
    let listOrders = [];
    let keyword = req.query.keyword;
    let whereClause = {};

    if (keyword) {
      whereClause = {
        [Sequelize.Op.or]: [
          {
            customer_name: {
              [Sequelize.Op.like]: `%${keyword}%`,
            },
          },
          {
            customer_phoneNumber: {
              [Sequelize.Op.like]: `%${keyword}%`,
            },
          },
        ],
      };
    }

    try {
      const items = await Order.findAll({
        where: whereClause,
        include: Product,
      });

      for (const item of items) {
        const product = await item.getProduct();
        listOrders.push({
          id: item.id,
          customer_name: item.customer_name,
          customer_phoneNumber: item.customer_phoneNumber,
          customer_address: item.customer_address,
          product_id: item.product_id,
          product: product.toJSON(), // Lấy thông tin sản phẩm dưới dạng JSON
        });
      }

      res.render("adminTemplate/order", {
        orders: listOrders,
        keyword: keyword,
      });
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new AdminOrderController();
