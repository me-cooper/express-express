/* EXPRESS-EXPRESS cooper */

/*
    # SETTINGS
*/

const port = 3000;
const templateFolder = "views";

var sampleDataSet = {
    ads: "hier könnte Ihre Werbung stehen",
    link_text: "zu den docs"
}

/*
    # SERVER
*/
var express = require('express');
var app = express();

/*
    # TEMPLATE ENGINE
*/
var eta = require("eta");
eta.configure({
    views: __dirname + '/' + templateFolder
})  
app.engine("eta", eta.renderFile);
app.set("view engine", "eta");
app.set(templateFolder, "./views");
app.use(express.static(__dirname + '/'+ templateFolder));



/*
    # ROUTES
*/

app.get('/', (req, res) => {
    res.render("index", sampleDataSet);
})

app.get('/hello', (req, res) => {
    res.render("hello", sampleDataSet);
})




/**/
//  #   ROUTES-COLLECTION AS MODULES  e.g: */$user/ || */$user/stats || */$user/groups
/**/ 
var search_route = require('./router/search.js');
app.use('/search', search_route);




// Handle 404 / 505 / ....
app.use(function(req, res, next) {
    if (res.headersSent) {
        return
    }
    // GET ERROR - 404, 503, 500, ...
    res.status(404);
    res.render('404', sampleDataSet);
});


// Launch the App

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})