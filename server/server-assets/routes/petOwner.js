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
router.post(baseRoute, (req, res, next) => {
  req.body.authorId = req.session.uid
  PetOwners.create(req.body)
    .then(newOwner => {
      res.send(newOwner)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})



module.exports = router