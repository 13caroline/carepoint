const User = require('../models/user')
const dbconfig = require('../models/Config/Database_Info');
const passport = require('passport');

var Out = module.exports;

//GET
Out.consultar = (email) => {
    return User.findOne({where:{'email': email}})
}

Out.consultar_id = (id) => {
    return User.findOne({where:{'idUser': id}})
}

Out.newUser = (body) => {
    User.create({
        name: body.name,
        password: body.password,
        email: body.email,
        phoneNumber: body.phone,
        sex: body.sex,
        type: 2,
        createdAt: '2020-01-09 07:30:40',
        lastActivity: '2020-04-29 14:48:37',
        active: 1,
        idLocation: body.idLocation
    })

    return User
}

//PUT
Out.testeCreate = () => {
    User.create({
        name: "Tohru",
        password: "12345",
        email: "theTest@gmail.com",
        phoneNumber: "910905213",
        sex: "M",
        type: "1",
        createdAt: '2020-01-09 07:30:40',
        lastActivity: '2020-04-29 14:48:37',
        active: 1,
        idLocation: 1
    })

    return User
}