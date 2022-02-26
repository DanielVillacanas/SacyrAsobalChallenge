const router = require("express").Router();
const Game = require("../../models/Game.model");
const User = require("../../models/User.model");
const Ticket = require("../../models/Ticket.model");

router.post("/createTicket", (req, res) => {
  const { gameId, price, quantity, userId } = req.body;
  if (!gameId || !userId) throw console.error("Missing Data");

  Ticket.create({ game: gameId, price: price, quantity, owner: userId })
    .then((ticket) => res.status(200).json(ticket))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
