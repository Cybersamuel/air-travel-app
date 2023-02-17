const UserRouter = require('express').Router();
const {addUser, 
    deleteUser, 
    getUsers, 
    getUserById, 
    updateUser } = require('../controllers/users')

UserRouter.get('/', getUsers);

UserRouter.get('/:id', getUserById);

UserRouter.post('/add', addUser);

UserRouter.post('/update/:id', updateUser);

UserRouter.delete('/:id', deleteUser);

module.exports = UserRouter;