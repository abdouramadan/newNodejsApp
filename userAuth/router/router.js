const router            = require('express').Router()

/*
 * @Router middleware
 */
router.use((req, res, next) => { next() })

/*
 * @Middlewares
 */

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
router.get('/login', authController.login_get)
router.get('/signup', authController.signup_get)
router.post('/login', authController.login_post)
router.post('/signup', authController.signup_post)

/*
 * @Export router
 */
module.exports = router