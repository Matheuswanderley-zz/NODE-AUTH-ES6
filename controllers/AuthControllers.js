const mongoose = require('mongoose');

const passport = require('passport');

const User = require('../models/User');

let userControllers = {}

userControllers.home = (req, res) => {
    res.render('index', {user: req.user});
};

userControllers.register = (req, res) => {
    res.render('register');
};

userControllers.doRegister = (req, res) => {
    User.register(new User({username: req.body.username, name: req.body.name}), req.body.password, (err, user) => {
        if(err){
            return res.render('register', {user : user});
        }
        passport.authenticate('local')( req, res, () => {
            res.redirect('/'); 
        });
    });
};

userControllers.login = (req, res) => {
    res.render('login');
};

userControllers.doLogin = (req, res) => {
    passport.authenticate('local')(req, res, () => {
        res.redirect('/');
    });
};

userControllers.logout = (req, res) => {
    req.logout();
    res.redirect('/')
};

module.exports = userControllers;