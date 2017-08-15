const express = require('express')
const router = express.Router()
const teachers = require('../models')

router.get('/', (req,res)=>{
    teachers.Teacher.findAll()
    .then(data_teach => {
        // console.log('==',data_teach)
        res.render('teacher', {dataTeach:data_teach})
    })
})

router.get('/teacher_add', (req,res)=>{
    res.render('teacher_add')
})

router.post('/teacher_add', function(req, res){
    teachers.Teacher.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(function(result){
        if (!result) {
            teachers.Teacher.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                createdAt: new Date(),
                updatedAt: new Date(),
            }).then(() =>{
                res.redirect('/teachers')
            })
            .catch((err)=>{
                res.render('teacher_add', {errmsg: err.messaage})
            })
        }else {
            res.render('teacher_add', {errmsg:'email telah terdaftar'})
        }
    })
  })

  router.get('/edit/:id', function(req, res){
    teachers.Teacher.findById(req.params.id)
      .then ((x) =>{
      res.render('teacher_edit', {editS:x})
    })
  })

  router.post('/edit/:id', function(req, res){
    teachers.Teacher.update({
      firstname: `${req.body.firstname}`,
      lastname: `${req.body.lastname}`,
      email: `${req.body.email}`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      where: {
        id:`${req.params.id}`
      }
    }).then(() =>{
      res.redirect('/teachers')
    })
  })

  router.get('/delete/:id', function(req, res){
    teachers.Teacher.destroy({
      where:{id:`${req.params.id}`}
    }).then(() =>{
      res.redirect('/teachers')
    })
  })

module.exports = router
