require("express-group-routes"); //initiate group route
const express = require("express"); // initiate express module/dependency
const app = express(); //declare new variable
const port = 5000; // declare port server that will use
const bodyParser = require("body-parser"); // initiate body parser

app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
 res.header("Access-Control-Allow-Headers", "*");
 next();
});

const Cat = require("./controllers/categories"); //declare variable categories from controllers
const home = require("./controllers/home");

//create the homepage route
app.get("/", (req, res) => {
 //res means, response, and it send string "Hello Express!" to the API
 res.send("Hello Express!");
});

app.group("/api/v1", router => {
 router.get("/categories", Cat.index);
 router.post("/category", Cat.store);
 router.get("/articles", home.index);
 router.get("/posts", home.pop);
 router.get("/artilce", home.show);
 router.post("/posting", home.store);
});

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`));
