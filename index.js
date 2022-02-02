// require express
const express = require("express");
// require express layouts
const expressLayouts = require('express-ejs-layouts');

//require cookie parser
const cookieParser = require('cookie-parser')

// fire up the server
const app = express();

// define port number
const port = 7000;
// database connect
const db = require('./config/mongoose')
    // require session
const session = require('express-session');

// REQUIRE PASSPORT AND LOCALSTARATEGY
const passport = require('passport');
const passportStrategy = require('./config/passport-local-strategy');



//// STATIC
app.use(express.static('./assets'))

// use express layouts
app.use(expressLayouts);

// PARSER
app.use(express.urlencoded());
app.use(cookieParser());

// extract styles and script from sub pages to layout
app.set('layout extractStyles', true);
app.set('layout extractJavascript', true);

/// VIEWS

app.set('view engine', 'ejs');
app.set('views', './views');

const MongoStore = require('connect-mongo')(session);

// use session

app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore({
            mongooseConnection: db,
            autoRemove: 'disabled'

        },
        function(err) {
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));
//
app.use(passport.initialize());

app.use(passport.session());

app.use(passport.setAuthenticatedUser);



// set up the route for project
app.use('/', require('./routes/index'));

/// listen the port no using a callback function
app.listen(port, function(err) {
    // using interpolation to print 
    // console.log("error", err); // normal method using comma to print err
    // next line shows interpolation embeddd variable into string
    // console.log('hello : ${2+2}');  ouput = hello : 4
    if (err) { console.log('error : ${err}'); }
    console.log('server is running successfully on port', port);
    
})