let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Note'

let schema = new Schema({
  behavior: { type: String },
  diet: { type: String },
  petId: { type: ObjectId, ref: 'Pet' },
  body: { type: String },
  flagged: { type: String, enum: ["Incident", "Pet Report", "General"] },
  petOwnerId: { type: ObjectId, ref: 'PetOwner' },
  identityId: { type: ObjectId, ref: 'Identity', required: true }
})

module.exports = mongoose.model(schemaName, schema)