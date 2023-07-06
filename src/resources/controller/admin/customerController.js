const Customer = require("../../model/customers");
const Sequelize = require("sequelize");

class AdminCustomerController {
  async index(req, res) {
    let listCustomer = [];

    let keyword = req.query.keyword;

    let whereClause = {};

    if (keyword) {
      whereClause = {
        [Sequelize.Op.or]: [
          {
            name: {
              [Sequelize.Op.like]: `%${keyword}%`,
            },
          },
          {
            email: {
              [Sequelize.Op.like]: `%${keyword}%`,
            },
          },
          {
            phoneNumber: {
              [Sequelize.Op.like]: `%${keyword}%`,
            },
          },
        ],
      };
    }

    await Customer.findAll({
      where: whereClause,
      order: [["id", "DESC"]],
    }).then((items) => {
      items.forEach((item) => {
        listCustomer.push({
          id: item.id,
          name: item.name,
          phoneNumber: item.phoneNumber,
          address: item.address,
          email: item.email,
          problem: item.problem,
        });
      });
    });

    res.render("adminTemplate/customer", {
      customers: listCustomer,
      keyword: keyword,
    });
  }
}

module.exports = new AdminCustomerController();
