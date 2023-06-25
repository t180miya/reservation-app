const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const ProductSchema = new Schema ({
  coverImage: String,
  name: {
    type: String,
    required: true,
    max: [60, '最大60文字までです']
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  heading1: {
    type: String
  },
  heading2: {
    type: String
  },
  heading3: {
    type: String
  },
  headingtext1: {
    type: String
  },
  headingtext2: {
    type: String
  },
  headingtext3: {
    type: String
  }
})

module.exports = mongoose.model('Product', ProductSchema)
