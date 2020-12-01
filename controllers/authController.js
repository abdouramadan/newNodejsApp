const passport          =   require('passport')

/*
 * @Login route
 * @Route /login
 * @Method <GET>
 */
module.exports.login = (req, res) =>
{
    res.render('auth/login')
}

/*
 * @Signup route
 * @Route /signup
 * @Method <GET>
 */
module.exports.signup = (req, res) =>
{
    res.render('auth/signup')
}

/*
 * @Profile route
 * @Route /profile
 * @Method <GET>
 */
module.exports.profile = (req, res) =>
{
    const user = req.user
    res.render('auth/profile', {user})
}

/*
 * @Logout route
 * @Route /logout
 * @Method <GET>
 */
module.exports.logout = (req, res) =>
{
    // handle with passport
    req.logout()
    res.redirect('/')
}