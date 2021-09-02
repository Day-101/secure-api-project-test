const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user
router.get("/", authMiddleware.requireAuth, userController.getAllUsers);

module.exports = router;
