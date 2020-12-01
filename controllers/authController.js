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
 * @Logout route
 * @Route /logout
 * @Method <GET>
 */
module.exports.logout = (req, res) =>
{
    res.send('logout')
}

/*
 * @Google route
 * @Route /google
 * @Method <GET>
 */
module.exports.google = (req, res) =>
{
    res.send('Google auth')
}