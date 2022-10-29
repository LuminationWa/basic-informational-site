const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url.toLowerCase();
  if (url === "/") writeSite(res, "index.html");
  else if (url === "/about" || url === "/contact-me")
    writeSite(res, url.slice(1) + ".html");
  else writeSite(res, "404.html");
});

const writeSite = (res, file) => {
  fs.readFile(file, function (err, content) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content, "utf-8");
  });
};

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
