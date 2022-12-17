const express = require("express");
const http = require("http");
const fs = require("fs").promises;
const app = express();
const port = 4000;

app.get("/", async (request, response) => {
  response.send(
    await fs.readFile("./index.html", "utf8", function (err, data) {
      if (err) throw err;
    })
  );
});

app.get("/about", async (request, response) => {
  response.send(
    await fs.readFile("./about.html", "utf8", function (err, data) {
      if (err) throw err;
    })
  );
});

app.get("/contact-me", async (request, response) => {
  response.send(
    await fs.readFile("./contact-me.html", "utf8", function (err, data) {
      if (err) throw err;
    })
  );
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
