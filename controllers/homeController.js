module.exports.homePage = (req, res) => {
    res.render('home/index', {user: req.user})
}