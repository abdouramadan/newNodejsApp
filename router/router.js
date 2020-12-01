const router = require('express').Router()

/*
 * @Router middleware
 */
router.use((req, res, next) => { next() })

/*
 * @Controllers
 */
const homeController = require('../controllers/homeController')
const authController = require('../controllers/authController')


/*
 * @Home routes
 */
router.get('/', homeController.homePage)

/*
 * @Auth routes
 */
router.get('/login', authController.login)
router.get('/signup', authController.signup)
router.get('/logout', authController.logout)

/*
 * @Google auth routes
 */
router.get('/google', authController.google)

/*
 * @Export router
 */
module.exports = router