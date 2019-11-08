const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
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

CategorySchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Categories', CategorySchema)