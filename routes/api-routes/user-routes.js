const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router.route('/').get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);


// Set up POST and DELETE at /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;

