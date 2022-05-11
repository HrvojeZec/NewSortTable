const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById) {

    const authenticateUser = async (email, password, done) => {

        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, { message: 'no user with that email' })
        }
        try {
            if (await bcrypt.compare(password, user.password)) {

                return done(null, user)
            }
            else {
                return done(null, false, { message: 'password incorrect' })

            }
        } catch (error) {
            return done(error)

        }

    }
    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password', session: false }, authenticateUser))
    passport.serializeUser((user, done) => {

        done(null, user.id);
    })
    passport.deserializeUser((id, done) => { return done(null, getUserById(id)) })
}

module.exports = initialize;