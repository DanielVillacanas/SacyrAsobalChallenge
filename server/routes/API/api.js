const axios = require("axios");
const router = require("express").Router();
const API_KEY = process.env.API_KEY;
const Game = require("../../models/Game.model");
const TEAMS = {
  Barcelona: "BARÇA",
  "CD Bidasoa Irun": "BIDASOA IRUN",
  Granollers: "FRAIKIN BM. GRANOLLERS",
  "La Rioja": "BM. LOGROÑO LA RIOJA",
  "Morrazo Cangas": "FRIGORIFICOS MORRAZO",
  Benidorm: "BM. BENIDORM",
  Huesca: "BADA HUESCA",
  Cuenca: "INCARLOPSA CUENCA",
  Nava: "VIVEROS HEROL BM. NAVA",
  Torrelavega: "BATHCO BM. TORRELAVEGA",
  Anaitasuna: "HELVETIA ANAITASUNA",
  "Puente Genil": "ANGEL XIMENEZ PUENTE GENIL",
  "BM Sinfin": "UNICAJA BANCO SINFIN",
  Ademar: "ABANCA ADEMAR LEON",
  "Atl. Valladolid": "RECOLETAS AT. VALLADOLID",
  Antequera: "BM. IBEROQUINOA ANTEQUERA",
};

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
          const homeName = game.teams.home.name;
          const awayName = game.teams.away.name;

          const game_data = {
            date: game.date,
            time: game.time,
            week: game.week,
            teams: {
              home: {
                name: TEAMS[homeName],
                img: game.teams.home.logo,
              },
              away: {
                name: TEAMS[awayName],
                img: game.teams.away.logo,
              },
            },
          };
          return Game.create(game_data).catch((err) => console.log(err));
        })
      ).then((response) => res.status(200).json({ message: "DONE" }));
    })

    .catch((err) => console.error(err));
});

module.exports = router;
