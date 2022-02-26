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
        type: String,
      },
      away: {
        type: String,
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
