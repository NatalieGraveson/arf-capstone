let router = require('express').Router()
let Pets = require('../models/pet')


let baseRoute = '/petowners/:petOwnerId/pets'

//GET
//TESTED AND WORKS
router.get(baseRoute, (req, res, next) => {
  Pets.find({ petOwnerId: req.params.petOwnerId })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

//GET ONE PET
//TESTED AND WORKS
router.get(baseRoute + '/:id', (req, res, next) => {
  Pets.findOne({ _id: req.params.id })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})


//POST
//TESTED AND WORKS
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

//DELETE
//TESTED AND WORKS
router.delete(baseRoute + '/:id', (req, res, next) => {
  Pets.deleteOne({ _id: req.params.id })
    .then(pet => {
      res.send("Successfully Deleted")
    })
    .catch(err => {
      res.status(400).send('Access Denied; Invalid Request')
    })
})

//PUT
//TESTED AND WORKS
router.put(baseRoute + '/:id', (req, res, next) => {
  Pets.findById(req.params.id)
    .then(pet => {
      if (!pet.identityId.equals(req.session.uid)) {
        return res.status(401).send("ACESS DENIED!")
      }
      pet.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next(err)
          return
        }
        res.send("Successfully Updated")
      })
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

module.exports = router

