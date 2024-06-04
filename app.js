const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const leave = require('./routes/leave-route');
const od = require("./routes/od-route")
const certificate = require("./routes/certificate_route")
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cors = require("cors")
const fs = require("fs")

const app = express();
app.use(cors({ origin: "*" }))
app.use(express.json())

// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use("/leave", leave)
app.use("/od", od)
app.use("/certificate", certificate)
app.use(express.static("public"))
// create home route
app.get('/', (req, res) => {
    res.render("index")
});
app.get('/signgoogle', (req, res) => {
    res.redirect("/auth/google")
});

app.post("/uploadfile", (req, res) => {
    req.on("data", (chunk) => {
        fs.appendFileSync("./files/" + req.headers["filename"], chunk)
    })
    res.end()
})

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
