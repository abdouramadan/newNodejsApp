/*
 * @Login route
 * @Route /login
 * @Method <GET>
 */
module.exports.login_get = (req, res) =>
{
    res.render('auth/login')
}

/*
 * @Login route
 * @Route /login
 * @Method <POST>
 */
module.exports.login_post = (req, res) =>
{
    res.send('auth/login')
}

/*
 * @Signup route
 * @Route /signup
 * @Method <GET>
 */
module.exports.signup_get = (req, res) =>
{
    res.render('auth/signup')
}

/*
 * @Signup route
 * @Route /signup
 * @Method <POST>
 */
module.exports.signup_post = (req, res) =>
{
    res.send('auth/signup')
}