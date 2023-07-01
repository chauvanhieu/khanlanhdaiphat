const Customer = require("../model/customers");

class ServiceController {
  index(req, res) {
    res.render("clientTemplate/contact", { title: "Liên hệ" });
  }

  async handlePost(req, res) {
    const { name, email, phoneNumber, problem, address } = req.body;
    const customer = {
      name,
      email,
      phoneNumber,
      problem,
      address,
    };
    await Customer.create(customer).catch((error) => {
      console.error("Lỗi khi thêm khách hàng:", error);
    });
    res.redirect("/");
  }
}

module.exports = new ServiceController();
