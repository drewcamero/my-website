// CAMERO, Jan Andrew S.
// NODE and Express JS

require("marko/node-require");
let markoExpress = require("marko/express");
let express = require("express");
let app = express();
let port = 8800;
let bodyParser = require("body-parser");
let path = require("path");
let viewsDirectory = path.join(__dirname, "/server/views");
let publicDirectory = path.join(__dirname, "/public");
let counter = 0;
let published = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicDirectory));
app.use(markoExpress());


app.get("/", function (req, res) {
  let view = require(path.join(viewsDirectory, "index.marko"));
  let data = {
    title: "Index",
    published: published
  };
  res.marko(view, data);
});

// app.get("/", function (req, res) {
//   let view = path.join(viewsDirectory, "index.html");
//   res.type("html");
//   res.sendFile(view);
// });

app.get("/countries", function (req, res) {
  let view = path.join(viewsDirectory, "countries.html");
  res.type("html");
  res.sendFile(view);
});

app.get("/landmarks", function (req, res) {
  let view = path.join(viewsDirectory, "landmarks.html");
  res.type("html");
  res.sendFile(view);
});

// app.get("/publish", function (req, res) {
//   let view = path.join(viewsDirectory, "publish.html");
//   res.type("html");
//   res.sendFile(view);
// });

app.get("/publish", function (req, res) {
  let view = require(path.join(viewsDirectory, "publish.marko"));
  let data = {
    title: "Publish",
    published: published
  };
  res.marko(view, data);
});

app.post("/publish", (req, res) => {
  let body = req.body;
  counter++;
  // console.log("Number of Places Published: " + counter);
  published.push({
    name: body.name,
    publish: body.country,
    description: body.description,
    image_a: body.pic_a,
    image_b: body.pic_b,
    count: 10+counter
  });
  // windows.alert("Great! You've successfuly added a new Landmark!");
  res.redirect("/");
});

app.listen(port, function (err) {
  if (err) { return console.error(err); }
  console.log("Listening to... " + port);
});