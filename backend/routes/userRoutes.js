const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


router.get("/", userController.getAllUsers);

router.get("/:user_id", userController.getUserById);


router.put("/:user_id", userController.updateUser);



router.put("/:user_id/role", userController.changeUserRole);



router.delete("/:user_id", userController.deleteUser);



module.exports = router;

