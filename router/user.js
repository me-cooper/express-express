
// can be anything $user is just a placeholder
// a little bit of a pattern. It's because $user is defined in express-express.js
// so in stead of $user we should see this here as a "data-Set / -Structure"

var express = require("express");
var router = express.Router();


var sampleDataSet = {}

// domain.com */$user
router.get('/', function(req, res){
    res.render("user", sampleDataSet);
})

// domain.com */$user/stats
router.get('/stats', function(req, res){
    res.render("stats", sampleDataSet);
})

// domain.com */$user/groups
router.get('/groups', function(req, res){
    res.render("groups", sampleDataSet);
})



module.exports = router;