require('./Item');
const Schema = require("mongoose").Schema;

const ItemSchema = new Schema({
  img: {type: String},
  name: { type: String, required: true },
  rawemoji: { type: String },
  favemoji: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  description: { type: String },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = ItemSchema;
