let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'PetOwner'

let schema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: Number },
  eContactName: { type: String, required: false },
  eContactNumber: { type: Number, required: false },
  balance: { type: String },
  email: { type: String },
  // petId: { type: ObjectId, ref: 'Pet' },
  pets: [{ type: ObjectId, ref: 'Pet' }],
  noteId: { type: ObjectId, ref: 'Note' },
  identityId: { type: ObjectId, ref: 'Identity' }
})

module.exports = mongoose.model(schemaName, schema)