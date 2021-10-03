const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const cont = require('../controller/cont');


/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/',  services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)

route.get('/update_userdeta', services.update_userdeta)


route.get('/login', services.login)

route.get('/register', services.register)

route.get('/user_info', services.user_info)

route.post('/login', services.user_info1 )


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

route.post('/api/users1', cont.create);
route.get('/api/users1', cont.find);
route.put('/api/users1/:id', cont.update);
route.delete('/api/users1/:id', cont.delete);



module.exports = route