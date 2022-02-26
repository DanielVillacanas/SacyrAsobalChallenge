const { Schema, model } = require('mongoose')

const gameSchema = new Schema(
  {
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    teams: {
      home: {
        name: String,
        img: String,
      },
      away: {
        name: String,
        img: String,
      },
    },
    week: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Game = model('Game', gameSchema)

module.exports = Game
