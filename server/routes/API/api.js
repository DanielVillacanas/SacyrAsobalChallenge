const axios = require('axios')
const router = require('express').Router()
const API_KEY = process.env.API_KEY

const config = {
  method: 'get',
  url: 'https://api-handball.p.rapidapi.com/games?league=103&season=2021',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'v1.handball.api-sports.io',
  },
}

// Get games
router.get('/games', (req, res) => {
  axios(config)
    .then((res) => {
      res.status(200).json(res.data.results)
    })
    .catch((err) => console.error(err))
})

module.exports = router
