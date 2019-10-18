require('dotenv').config({path:__dirname+'/../.env'})
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./controllers/authController')
const treasureCtrl = require('./controllers/treasureController')

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const PORT = SERVER_PORT 

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log(`...I'm in. `)
})

app.use(session({
    resave: true, 
    saveUninitialized: false, 
    secret: SESSION_SECRET
}))

app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);
app.get('/api/treasure/dragon', treasureCtrl.dragonTreasure);
app.get('/api/treasure/user', treasureCtrl.getUserTreasure);

app.listen(PORT, console.log(`Server listening on Port ${PORT}`))