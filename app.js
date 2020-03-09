var express = require("express");
var app = express();
var port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendfile("index.html");
});
app.get("/informasi-ppdb", (req, res) => {
  res.sendfile("public/informasi.html");
});

app.listen(port, () => {
  console.log(`App berjalan pada port ${port}`);
});
