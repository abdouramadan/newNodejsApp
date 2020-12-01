const router            = require('express').Router()
const passport          =   require('passport')

/*
 * @Router middleware
 */
router.use((req, res, next) => { next() })

/*
 * @Middlewares
 */
const {checkIfUserIn, checkIfUserOut}    = require('../middleware/authMiddleware')

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
router.get('/profile', checkIfUserIn, authController.profile)
router.get('/logout', authController.logout)

/*
 * @Google auth routes
 */
router.get('/google', checkIfUserOut, passport.authenticate('google', 
{
    scope: ['profile']
}))

/*
 * @callback route for google to redirct to
 */
router.get('/google/redirect', passport.authenticate('google'), (req, res) =>
{   
    res.redirect('/profile')
})

/*
 * @Export router
 */
module.exports = router