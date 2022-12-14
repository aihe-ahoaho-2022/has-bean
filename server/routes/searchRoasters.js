const express = require('express')
const db = require('../db/searchRoasters.js')
const router = express.Router()

//api/v1/searchRoasters/
router.get('/', (req, res) => {
  db.getSearchRoasters()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err.message)
      res.sendStatus(500)
    })
})



module.exports = router