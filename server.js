// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// import routes
const routes = require("./routes");



// Set the port of our application
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//express stuff to be removed later
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.use("/img",express.static(__dirname + "/public/assets/img"));

//fires up my routes
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("App running on: http://localhost:" + PORT);
});