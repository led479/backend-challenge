const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: "Please enter an ID"
  },
  name: {
    type: String,
    unique: true,
    required: "Please enter a name"
  },
  childrenIds: {
    type: Array
  }
})

module.exports = mongoose.model('Categories', CategorySchema)