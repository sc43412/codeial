// require express
const express = require("express");
// require express layouts
const expressLayouts = require('express-ejs-layouts');



//require cookie parser
const cookieParser = require('cookie-parser')


// fire up the server
const app = express();

// define port number
const port = 5000;
// database connect
const db = require('./config/mongoose')
app.use(express.static('./assets'))
    // use express layouts
app.use(expressLayouts);
app.use(express.urlencoded());
app.use(cookieParser());

// extract styles and script from sub pages to layout
app.set('layout extractStyles', true);
app.set('layout extractJavascript', true);
// set up the route for project
app.use('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', './views');
/// listen the port no using a callback function
app.listen(port, function(err) {
    // using interpolation to print 
    // console.log("error", err); // normal method using comma to print err
    // next line shows interpolation embeddd variable into string
    // console.log('hello : ${2+2}');  ouput = hello : 4
    if (err) { console.log('error : ${err}'); }
    console.log('server is running successfully on port', port);
})