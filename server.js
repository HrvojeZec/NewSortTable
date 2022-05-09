
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


const express = require('express')
const app = express()
let { Globalclubs } = require('./backend/database')
const bcrypt = require('bcrypt');
const { has } = require('lodash');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session')

const initializePassport = require('./passport')
initializePassport(passport,
    email => { return users.find(user => user.email === email) },
    id => { return users.find(user => user.id === id) }
);

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('./frontend'))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/css', express.static(__dirname + './frontend/public'))


app.get('/', (req, res) => {
    res.render('/Home_page/home.html')
})

app.get('/clubs', (req, res) => {

    res.json(Globalclubs)
})
app.get('/login', (req, res) => {
    let img = `img src=/public/images/avatar.png`;
    res.render("./Login_page/index.ejs")


})
app.get('/register', (req, res) => {
    let img = `img src=/public/images/avatar.png`;
    res.render("./Register_page/register.ejs")


})
app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword


        })

        res.redirect('/login')
    } catch (error) {
        res.redirect('/register')
        console.log(error);

    }
    console.log(users);
})

function checkAutenticated() {

}

app.listen(3000, (err) => {
    if (err) {
        console.error('Failure to launch server');
        return;
    }
    console.log('server is listening on port 3000');
})


