const express = require('express')
const router = express.Router()
const subjects = require('../models')
// let subjects = new Addresses()

router.get('/', (req,res)=>{
  subjects.Subject.findAll()
    .then(data_sub => {
        // console.log('==',data_sub)
      res.render('subject', {dataSub:data_sub})
    })
  })




  module.exports = router