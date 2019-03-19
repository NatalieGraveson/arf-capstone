let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Pet'

let schema = new Schema({
  name: { type: String, required: true },
  breed: { type: String },
  img: { type: String },
  petOwnerId: { type: ObjectId, ref: 'PetOwner' },
  noteId: { type: ObjectId, ref: 'Note' },
  checkedIn: { type: Boolean, default: false }
})

module.exports = mongoose.model(schemaName, schema)