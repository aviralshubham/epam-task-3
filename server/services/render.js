const axios = require('axios');
var Userdb1 = require('../model/mod');

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.login = (req, res) =>{
    res.render('login');
}

exports.register = (req, res) =>{
    res.render('register');
}

exports.user_info = (req, res) =>{
    axios.get('http://localhost:3000/api/users1')
    .then(function(response){
        res.render('user_info', { users1 : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.user_info1 = (req, res)=>{
    try{
        const email = req.body.email;
        const mary = "gulnazar"
       // res.json(email);
        const password = req.body.password;
        const ps = "90879090";
        //res.json(password);
        console.log(`${email} and ${password}`);
        
       // const usermail = users1.findOne({email:email});
        if(ps === password & email === mary){
            res.status(201).render("add_user");
        }else{
            res.status(400).send("invalid Mail or password");
        }
    }catch{
        res.status(400).send("invalid Mail or password");
    }
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.update_userdeta = (req, res) =>{
    axios.get('http://localhost:3000/api/users1', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_userdeta", { user1 : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

