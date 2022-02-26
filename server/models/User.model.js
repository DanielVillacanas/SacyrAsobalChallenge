const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    favorite_team: {
      type: String,
      enum: [
        'BARCELONA',
        'BIDASOA IRUN',
        'BM. LOGROÑO LA RIOJA',
        'FRAIKIN BM. GRANOLLERS',
        'BADA HUESCA',
        'INCARLOPSA CUENCA',
        'ABANCA ADEMAR LEON',
        'ANGEL XIMENEZ PUENTE GENIL',
        'RECOLETAS AT. VALLADOLID',
        'HELVETIA ANAITASUNA',
        'BM. BENIDORM',
        'VIVEROS HEROL BM. NAVA',
        'UNICAJA BANCO SINFIN',
        'FRIGORIFICOS MORRAZO',
        'BATHCO BM. TORRELAVEGA',
        'BM. IBEROQUINOA ANTEQUERA',
      ],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const User = model('User', userSchema)

module.exports = User
