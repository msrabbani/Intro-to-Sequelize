const express = require('express')
const router = express.Router()
const students = require('../models')

router.get('/', (req,res)=>{
    students.Student.findAll()
    .then(data_stud => {
        // console.log('==',data_stud)
        res.render('student', {dataStud:data_stud})
    })
})

router.get('/student_add', (req,res)=>{
    res.render('student_add')
})

router.post('/student_add', function(req, res){
    students.Student.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(function(result){
        if (!result) {
            students.Student.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                createdAt: new Date(),
                updatedAt: new Date(),
            }).then(() =>{
                res.redirect('/students')
            })
            .catch((err)=>{
                res.render('student_add', {errmsg: err.messaage})
            })
        }else {
            res.render('student_add', {errmsg:'email telah terdaftar'})
        }
    })
  })

  router.get('/edit/:id', function(req, res){
    students.Student.findById(req.params.id)
      .then ((x) =>{
      res.render('student_edit', {editS:x})
    })
  })

  router.post('/edit/:id', function(req, res){
    students.Student.update({
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
      res.redirect('/students')
    })
  })

  router.get('/delete/:id', function(req, res){
    students.Student.destroy({
      where:{id:`${req.params.id}`}
    }).then(() =>{
      res.redirect('/students')
    })
  })

  router.get('/:id/addsubject', (req,res)=>{
      students.Student.findById(req.params.id)
      .then((x)=>{
          students.Subject.findAll()
          .then((y)=>{
          res.render('addsubject',{dataStud:x, dataSub:y})
      })
    })
  })

  router.post('/:id/addsubject',(req,res)=>{
      students.StudentSubject.create({
          StudentId:req.params.id,
          SubjectId:req.body.dropdown
      },{
          where:{
              id:req.params.id
          }
      }).then(()=> res.redirect('/students'))
  .catch(err=>{
      console.log(err);
  })
  })

// yang belum : validasi pada model Student untuk memeriksa input email. Input email harus
// a. Berformat yang benar, [user]@[domainname].[domain]
// b. Email tidak boleh duplikat
// no 11
// assosation one to one many to many
//help, parsial belum
module.exports = router
