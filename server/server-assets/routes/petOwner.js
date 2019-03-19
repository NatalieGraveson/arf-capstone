let router = require('express').Router()
let PetOwners = require('../models/petOwner')


let baseRoute = '/petowners'
//GET ALL
router.get(baseRoute, (req, res, next) => {
  PetOwners.find({ identityId: req.session.uid })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})


//GET ONE
router.get(baseRoute + '/:id', (req, res, next) => {
  PetOwners.findOne({ _id: req.params.id, identityId: req.session.uid })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

//POST



module.exports = router