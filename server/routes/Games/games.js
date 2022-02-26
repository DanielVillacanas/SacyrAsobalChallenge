const Game = require("../../models/Game.model");

const router = require("express").Router();

router.get("/", (req, res) => {
  const jornada = req.query.jornada;
  if (!jornada) throw console.error("Missing Data");
  Game.find({ week: jornada })
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(400).json({ message: "No games founded" }));
});

module.exports = router;
