
// can be anything $user is just a placeholder
// a little bit of a pattern. It's because $user is defined in express-express.js
// so in stead of $user we should see this here as a "data-Set / -Structure"

var express = require("express");
var router = express.Router();


var mistert = {
    name: "Mister T",
    description: "Wir stehen für eine gesunde Lebensweise. T "
}


// ?term=$var
router.get('/', function(req, res){

    if(req.query.term){

        if(req.query.term == "mistert"){
            res.send(
                mistert
            )
        }else{
            res.status(403);
            res.render('403', {});
        }

    }else{
        res.status(403);
        res.render('403', {});
    }

    
    
})

module.exports = router;