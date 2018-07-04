var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//express routes to things in public that match queries
app.use(express.static("public")); 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("http://localhost:" + PORT);
});

app.get("/", function (req, res) {
    res.sendFile('public/home.html', { root: __dirname });
});

app.get("/survey", function (req, res) {
    res.sendFile('public/survey.html', { root: __dirname });
});

app.get("/api/friends", function(req,res){
    res.sendFile("app/data/friends.js", { root: __dirname });
})

