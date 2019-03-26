let router = require('express').Router()
let TimeCard = require('../models/timecard')


let baseRoute = '/petowners/:petOwnerId/pets/:petId/timecard'


//GET ALL BY PET ID
router.get(baseRoute, (req, res, next) => {
  TimeCard.find({ petId: req.params.petId })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

//GET ONE BY ID
router.get(baseRoute + '/:id', (req, res, next) => {
  TimeCard.findOne({ _id: req.params.id })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

//CREATE TIMECARD
router.post(baseRoute, (req, res, next) => {
  // req.body.identityId = req.session.uid
  TimeCard.create(req.body)
    .then(newTimeCard => {
      res.send(newTimeCard)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

router.put(baseRoute + '/:id', (req, res, next) => {
  TimeCard.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(note => {
      res.status(200).send(note)
    })
    .catch(err => {
      res.status(400).send({ Error: err })
    })
})

//DELETE TIMECARD
router.delete(baseRoute + '/:id', (req, res, next) => {
  TimeCard.deleteOne({ _id: req.params.id })
    .then(pet => {
      res.send("Successfully Deleted")
    })
    .catch(err => {
      res.status(400).send('Access Denied; Invalid Request')
    })
})

module.exports = router