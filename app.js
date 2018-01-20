var subdomain = require('express-subdomain');
var express = require('express');
var app = express();
var router = express.Router();
 
// *** Code examples below go here! *** 
 
// example.com 
app.get('/', function(req, res) {
    res.send('Hello world');
});
 
//api specific routes 
router.get('/', function(req, res) {
    res.send('Welcome to our API!');
});
 
router.get('/users', function(req, res) {
    res.json([
        { name: "Brian" }
    ]);
});

app.use(subdomain('api', router));
app.listen("3000",function(){
    console.log("server running at port 3000");
});