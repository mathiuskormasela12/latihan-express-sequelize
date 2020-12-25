// ===== App
// import all modules
const express         = require('express');
const upload          = require('express-fileupload');
const config          = require('../config/configurations');

// import all controllers
const authController  = require('../controllers/authController');

// import all middlewares
const authMiddleware  = require('../middlewares/auth.midleware');

// init router
const router          = express.Router();

// setup upload
router.use(upload(config.upload));

router.post('/register', authMiddleware.register ,authController.register);
router.post('/login', authMiddleware.login, authController.login);

module.exports        = router;
