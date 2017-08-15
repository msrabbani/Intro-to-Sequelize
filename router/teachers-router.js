const express = require('express')
const router = express.Router()
const teachers = require('../models')

router.get('/', (req,res)=>{
    teachers.Teacher.findAll()
    .then(data_teach => {
        console.log('==',data_teach)
        res.render('teacher', {dataTeach:data_teach})
    })
})

module.exports = router
