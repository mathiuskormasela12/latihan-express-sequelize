// ===== Pages
// import all modules
const express           = require('express');
const session           = require('express-session');
const cookie            = require('cookie-parser');
const config            = require('../config/configurations');

// import all pages controllers
const pagesController   = require('../controllers/pagesController');

// init router
const router            = express.Router();

// setup session
router.use(session(config.session));

// setup cookie
router.use(cookie());

router.get('/', pagesController.home);
router.get('/register', pagesController.register);

module.exports          = router;



