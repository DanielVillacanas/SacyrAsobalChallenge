const { Schema, model } = require("mongoose");

const ticketSchema = new Schema(
  {
    game: { type: Schema.Types.ObjectId, ref: "Game" },
    price: { type: Number },
    quantity: { type: Number },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Ticket = model("Ticket", ticketSchema);

module.exports = Ticket;
