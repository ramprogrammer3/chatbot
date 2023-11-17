const express = require('express');
const router = express.Router();

const {login,signup,getAllUser} = require("../controller/userController");

router.get("/user",getAllUser);
router.post("/user/login",login);
router.post("/user/singup",signup)

module.exports = router;