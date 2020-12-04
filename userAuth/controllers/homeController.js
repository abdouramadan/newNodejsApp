/*
 * @Home route
 * @Route /
 * @Method <GET>
 */
module.exports.homePage = (req, res) => {
    res.render('home/index')
}