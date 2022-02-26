const router = require("express").Router();
const Game = require("../../models/Game.model");
const User = require("../../models/User.model");
const Ticket = require("../../models/Ticket.model");

router.post("/createTicket", (req, res) => {
  const { gameId, quantity } = req.body;
  if (!gameId) throw console.error("Missing Data");

  const ticket = {
    total: quantity * 20,
    quantity: quantity,
    logo: "https://www.madridiario.es/fotos/1/200045_SacyrAsobalvertical_1.jpg",
  };

  let dateGenerator = (date) => {
    let temp = date.split("-");
    let to = temp[2] + "/" + temp[1] + "/" + temp[0];
    return to;
  };

  Game.findById(gameId).then((response) => {
    ticket.date = dateGenerator(response.date.slice(0, 10));
    ticket.name = `${response.teams.home.name} VS ${response.teams.away.name}`;
    res.status(200).json(ticket);
  });
});

module.exports = router;
