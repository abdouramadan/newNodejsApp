const router = require('express').Router()
const homeController = require('../controllers/homeController')

router.use((req, res, next) => { next() })

router.get('/', homeController.homePage)

module.exports = router