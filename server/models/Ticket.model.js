const { Schema, model } = require("mongoose");

const ticketSchema = new Schema(
  {
    game: { type: Schema.Types.ObjectId, ref: "Game" },

    email: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    favorite_team: {
      type: String,
      enum: [
        "BARÇA",
        "BIDASOA IRUN",
        "BM. LOGROÑO LA RIOJA",
        "FRAIKIN BM. GRANOLLERS",
        "BADA HUESCA",
        "INCARLOPSA CUENCA",
        "ABANCA ADEMAR LEON",
        "ANGEL XIMENEZ PUENTE GENIL",
        "RECOLETAS AT. VALLADOLID",
        "HELVETIA ANAITASUNA",
        "BM. BENIDORM",
        "VOVERPS HEROL BM. NAVA",
        "UNICAJA BANCO SINFIN",
        "FRIGORIFICOS MORRAZO",
        "BATHCO BM. TORRELAVEGA",
        "BM. IBEROQUINOA ANTEQUERA",
      ],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Ticket = model("Ticket", ticketSchema);

module.exports = Ticket;
