let router = require('express').Router()
let PetOwners = require('../models/petOwner')


let baseRoute = '/petowners'
//GET ALL
//TESTED AND WORKS
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
//TESTED AND WORKS
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
//TESTED AND WORKS
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

//PUT
//TESTED AND WORKS
router.put(baseRoute + '/:id', (req, res, next) => {
  PetOwners.findById(req.params.id)
    .then(petOwner => {
      if (!petOwner.identityId.equals(req.session.uid)) {
        return res.status(401).send("ACESS DENIED!")
      }
      petOwner.update(req.body, (err) => {
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

//DELETE
//TESTED AND WORKS
router.delete(baseRoute + '/:id', (req, res, next) => {
  let petOwnerId = req.param('id')
  PetOwners.findById({ _id: petOwnerId, identityId: req.session.uid })
    .then(petOwner => {
      petOwner.remove(err => {
        if (err) {
          console.log(err)
          next(err)
          return
        }
        res.send("Successfully Deleted")
      })
        .catch(err => {
          res.status(400).send('ACCESS DENIED; Invalid Request')
        })
    })
})



module.exports = router