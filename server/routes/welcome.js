const express = require('express')

const router = new express.Router()

router.get('/welcome', (_req, res) => {
  res.status(200).send({ message: 'Hello from express server!' })
})

module.exports = router
