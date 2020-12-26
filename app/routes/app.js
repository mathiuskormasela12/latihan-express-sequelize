// ===== App
// import all modules
const express         = require('express');
const upload          = require('express-fileupload');
const config          = require('../config/configurations');

// import all controllers
const authController  = require('../controllers/authController');
const appController   = require('../controllers/appController');

// import all middlewares
const authMiddleware  = require('../middlewares/auth.midleware');
const appMiddleware   = require('../middlewares/add.middleware');

// init router
const router          = express.Router();

// setup upload
router.use(upload(config.upload));

router.post('/register', authMiddleware.register ,authController.register);
router.post('/login', authMiddleware.login, authController.login);
router.get('/logout', authMiddleware.isLogin, authController.logout)
router.post('/add', appMiddleware.add, appController.add);

module.exports        = router;
