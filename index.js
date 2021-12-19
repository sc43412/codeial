// require express
const express = require("express");
// require express layouts
const expressLayouts = require('express-ejs-layouts');

// fire up the server
const app = express();

// define port number
const port = 8000;
// use express layouts
app.use(expressLayouts);
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