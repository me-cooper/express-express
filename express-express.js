/* EXPRESS-EXPRESS cooper */

const port = 3000;
const templateFolder = "views";

var sampleDataSet = {
    this: "is just a simple example.",
    can: "you say hello?"
}


//Server
var express = require('express');
var app = express();

// Template Engine
var eta = require("eta");
eta.configure({
    views: __dirname + '/' + templateFolder
})  
app.engine("eta", eta.renderFile);
app.set("view engine", "eta");
app.set(templateFolder, "./views");
app.use(express.static(__dirname + '/'+ templateFolder));



// Renderer with Data
app.get('/', (req, res) => {
    res.render("homepage", sampleDataSet);
})

app.get('/hello', (req, res) => {
    res.render("hello", sampleDataSet);
})

app.get('/:placeholder?', (req, res) => {
    res.render("404", sampleDataSet);
})




// Launch the App

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})