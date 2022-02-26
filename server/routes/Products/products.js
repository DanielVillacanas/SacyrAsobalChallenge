const Product = require("../../models/Product.model");
const router = require("express").Router();

router.get("/", (req, res) => {
  const team = req.query.team;
  if (!team) {
    Product.find()
      .then((products) =>
        products.length < 1
          ? res.status(404).json({ message: "No products" })
          : res.status(200).json(products)
      )
      .catch((err) => res.status(400).json({ message: "Error retrieving products", err }));
  } else {
    Product.find({ owner: { $in: team } }, { owner: 1, price: 1, img_url: 1, name: 1 })
      .then((products) =>
        products.length < 1
          ? res.status(404).json({ message: "No products" })
          : res.status(200).json(products)
      )
      .catch((err) => res.status(400).json({ message: "Error retrieving products", err }));
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.query;
  Product.findById(id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
