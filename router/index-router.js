const express = require('express')
const router = express.Router()
const user = require('../models')

router.get('/', function(req, res){
    res.render('index')
    })

router.get('/login', function(req,res){
    res.render('login')
    })

router.post('/login', function(req,res,next){
    let username = req.body.username
    let password = req.body.password

    user.User.find({
        where:{username:username}
    }).then(user=>{
        if (user.password == password) {
            req.session.user = {
                username : username,
                role:user.role
            }
            res.redirect('/dashboard')
        } else {
            res.send("Password yang anda masukan tidak sesusai")
        }
    })
    .catch(err=>{
        res.redirect('/login')
    })
})

module.exports = router
