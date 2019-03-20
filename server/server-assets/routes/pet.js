let router = require('express').Router()
let Pets = require('../models/pet')


let baseRoute = '/petowners/:petOwnerId/pets'

//GET
router.get(baseRoute, (req, res, next) => {
  Pets.find({ petOwnerId: req.params.listId, identityId: req.session.uid })
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
  req.body.identityId = req.session.uid
  Pets.create(req.body)
    .then(newPet => {
      res.send(newPet)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})