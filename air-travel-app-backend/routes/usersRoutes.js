const UserRouter = require('express').Router();

const {addUser, 
    deleteUser, 
    getUsers, 
    getUserById, 
    updateUser, authUser, forgotPass } = require('../controllers/users')

UserRouter.get('/', getUsers);

UserRouter.get('/:id', getUserById);

UserRouter.post('/add', addUser);

UserRouter.post('/update/:id', updateUser);

UserRouter.delete('/:id', deleteUser);

UserRouter.post('/auth', authUser);

UserRouter.post('update/resetPassword', forgotPass)

module.exports = UserRouter;