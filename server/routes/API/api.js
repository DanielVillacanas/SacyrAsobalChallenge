const axios = require("axios");
const router = require("express").Router();
const API_KEY = process.env.API_KEY;
const Game = require("../../models/Game.model");

const config = {
  method: "get",
  url: "https://api-handball.p.rapidapi.com/games?league=103&season=2021",
  headers: {
    "x-rapidapi-key": API_KEY,
  },
};

// Get games
router.get("/games", (req, res) => {
  axios(config)
    .then((data) => {
      Promise.all(
        data.data.response.map((game) => {
          const game_data = {
            date: game.date,
            time: game.time,
            week: game.week,
            teams: {
              home: game.teams.home.name,
              away: game.teams.away.name,
            },
          };
          return Game.create(game_data).catch((err) => console.log(err));
        })
      ).then((response) => res.status(200).json({ message: "DONE" }));
    })

    .catch((err) => console.error(err));
});

module.exports = router;
