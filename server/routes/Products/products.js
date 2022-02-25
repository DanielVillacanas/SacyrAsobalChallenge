const Product = require("../../models/Product.model");
const router = require("express").Router();

router.get("/", (req, res) => {
  const team = req.query;
  if (!team) throw console.error("Missing data");
  Product.find({ owner: team }, { owner: 1, price: 1, img_url: 1, name: 1 })
    .then((products) =>
      products.length < 0
        ? res.status(404).json({ message: "No products" })
        : res.status(200).json(products)
    )
    .catch((err) => res.status(400).json({ message: "Error retrieving products", err }));
});
router.get("/test", (req, res) => {
  //   const team = req.params.team;
  //   if (!team) throw console.error("Missing data");
  //   Product.find({ owner: team }, { owner: 1, price: 1, img_url: 1, name: 1 })
  //     .then((products) =>
  //       products.length < 0
  //         ? res.status(404).json({ message: "No products" })
  //         : res.status(200).json(products)
  //     )
  //     .catch((err) => res.status(400).json({ message: "Error retrieving products", err }));
});

module.exports = router;
