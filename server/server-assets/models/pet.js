let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Pet'

let schema = new Schema({
  name: { type: String, required: true },
  age: { type: String },
  breed: { type: String },
  img: { type: String },
  petOwnerId: { type: ObjectId, ref: 'PetOwner', required: true },
  noteId: { type: ObjectId, ref: 'Note' },
  checkedIn: { type: Boolean, default: false },
  identityId: { type: ObjectId, ref: 'Identity', required: true }
})

module.exports = mongoose.model(schemaName, schema)
// module.exports = router