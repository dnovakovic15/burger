var exphbs = require("express-handlebars");
let burgers = require('../models/burger.js');


function route(app){
    // Set Handlebars as the default templating engine.
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

    app.get("/allBurgers", function(req, res) {
        burgers.selectAll(cb, res);
    });

    app.post("/addBurger", function(req, res) {
        console.log(req.body.burger_name);
        burgers.insertOne(req.body.burger_name);
    });

    app.post("/devourBurger", function(req, res) {
        console.log(req.body.burger_name);
        burgers.updateOne(req.body.burger_name);
    });
}

function cb(result, res){
    console.log(result[0].burger_name);
    res.render("index", {
        burgers: result,
    });
}

module.exports = route;