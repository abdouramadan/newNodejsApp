const checkIfUserIn = (req, res, next) =>
{
    if(!req.user)
    {
        res.redirect('/google')
    } else { next() }
}

const checkIfUserOut = (req, res, next) =>
{
    if(req.user)
    {
        res.redirect('/profile')
    } else { next() }
}

module.exports = { checkIfUserIn, checkIfUserOut }