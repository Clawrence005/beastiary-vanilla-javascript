var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var monsters = require("./data/monstersData.json");
console.log("monsters", monsters)
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

var path = require("path");
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/template", function (req, res) {
  res.sendFile(path.join(__dirname + "/template.html"));
});

app.listen(PORT, function () {
  console.log(`App listening on PORT: ${PORT}`)
})
//