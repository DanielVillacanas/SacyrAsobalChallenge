const { Schema, model } = require('mongoose')

const productSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      enum: [
        'ASOBAL',
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
    timestamps: true,
  }
)

const Product = model('Product', productSchema)

module.exports = Product
