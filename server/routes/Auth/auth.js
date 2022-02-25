const User = require("../../models/User.model");
const session = require("express-session");
const bcrypt = require("bcrypt");

const router = require("express").Router();

router.post("/signUp", (req, res) => {
  const { email, username, password } = req.body;
  const bcryptSalt = 10;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  User.findOne({ email }).then((user) => {
    user
      ? res.status(403).json({ message: "Error usuario ya registrado" })
      : User.create({
          email,
          password: hashPass,
          username,
        }).then((response) => {
          req.session.currentUser = response;
          return res.json(response);
        });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        bcrypt.compareSync(password, user.password) //Validate password
          ? ((req.session.currentUser = user), res.json({ user: user, type: "user" }))
          : res.status(500).send("Error contraseña incorrecta!");
      } else {
        Seller.findOne({ email }).then((seller) => {
          seller
            ? bcrypt.compareSync(password, seller.password) //Validate password
              ? ((req.session.currentUser = seller), res.json({ user: seller, type: "seller" }))
              : res.status(500).send("Error contraseña incorrecta!")
            : res.status(500).send("Error usuario no registrado!");
        });
      }
    })
    .catch((err) => res.status(500).send("Error contraseña incorrecta!"));
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => res.status(200).json({ code: 200, message: "Logout successful" }));
});

router.get("/isloggedin", (req, res) => {
  const _id = req.session.currentUser?._id;
  User.findById(_id)
    .populate("productsCart.product")
    .then((user) => {
      req.session.currentUser
        ? res.json(user)
        : res.status(401).json({ code: 401, message: "Unauthorized" });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
