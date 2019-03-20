let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'PetOwner'

let schema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: Number },
  eContact: { type: Number, required: false },
  billing: { type: String },
  petId: { type: ObjectId, ref: 'Pet' },
  noteId: { type: ObjectId, ref: 'Note' },
  identityId: { type: ObjectId, ref: 'Identity', required: true }
})

module.exports = mongoose.model(schemaName, schema)