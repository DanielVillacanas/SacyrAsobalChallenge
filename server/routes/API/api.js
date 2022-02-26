const axios = require('axios')
const router = require('express').Router()
const API_KEY = process.env.API_KEY

const config = {
  method: 'get',
  url: 'https://api-handball.p.rapidapi.com/games?league=103&season=2021',
  headers: {
    'x-rapidapi-key': API_KEY,
  },
}

// Get games
router.get('/games', (req, res) => {
  axios(config)
    .then((data) => {
      res.status(200).json(data.data.response)
    })
    .catch((err) => console.error(err))
})

module.exports = router
