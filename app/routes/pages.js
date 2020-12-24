// ===== Pages
// import all modules
const express           = require('express');
const session           = require('express-session');
const cookie            = require('cookie-parser');
const sessionOpt        = require('../config/sessionOpt');

// import all pages controllers
const pagesController   = require('../controllers/pagesController');

// init router
const router            = express.Router();

// setup session
router.use(session(sessionOpt));

// setup cookie
router.use(cookie());

router.get('/', pagesController.home);

module.exports          = router;



