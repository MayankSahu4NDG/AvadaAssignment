// =================================================================
//                                              Package Installation
// =================================================================
var express                 = require("express"),
    bodyParser              = require("body-parser"),
    app  = express(),
    port = process.env.PORT || 1020;

// =================================================================
//                                             Package Configuration
// =================================================================
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

// =================================================================
//                                                  Home Page Config
// =================================================================
app.get("/", (req,res) => {
    res.render("landingPage");
});
app.get("/checkOut", (req,res) => {
    res.render("checkOut");
});

// =================================================================
//                                                    Server Starter
// =================================================================
app.listen(port, (req, res) => {
    console.log("Server is Working!!");
});

