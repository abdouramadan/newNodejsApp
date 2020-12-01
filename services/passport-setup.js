const passport          = require('passport')
const googleStrategy    = require('passport-google-oauth20')
const User              = require('../models/User')
const dotenv            = require("dotenv").config()

/*
 * @Serialize user
 */
passport.serializeUser((user, done) =>
{
    done(null, user.id)
})

/*
 * @Deserialize user
 */
passport.deserializeUser( async (id, done) =>
{
    try {
        const user = await User.findById(id)
        done(null, user)
    } catch (err) {
        console.log(err)
    }
})

/*
 * @Use google strategy
 */
passport.use(new googleStrategy(
{
    callbackURL: process.env.GOOGLE_CALL_BACK_URL,
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
}, async (accessToken, refreshToken, profile, done)=> 
{
    const username      = profile.displayName
    const googleId      = profile.id
    const image         = profile.photos[0].value
    const currentUser   = await User.findOne({ googleId: profile.id })

    if(currentUser) 
    { done(null, currentUser) } 
    else 
    {
        try {
            const user = await User.create({username, googleId, image})
            done(null, currentUser)
        } catch (err) { console.log(err) }
    }
}))