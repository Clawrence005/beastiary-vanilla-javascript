
const http = require("http");
const fs = require("fs");

const PORT = 3000;
const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url

  switch (path) {
    case "/":
    case "/beastiary":
    case "/other":
    case "/template":
      return renderHTML(path + ".html", res);

    default:
      return renderHTML("/index.html", res);
  }
}

function renderHTML(filePath, res) {
  return fs.readFile(__dirname + filePath, function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  })
}

// const displayRoot = (url, req, res) => {
//   const myHTML = `
//   <html>
//   <body>
//   <h1> Bestiary homepage</h1>
//   <a href="/portfolio">portfolio</a>
//   </body>
//   </html>
//   `;
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(myHTML);
// }
// const displayPortfolio = (url, req, res) => {
//   const myHTML = `
//   <html>
//   <body>
//   <h1>Bestiary portfolio</h1>
//   <a href="/">go home</a>
//   </body>
//   </html>
//   `;
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(myHTML)
// }

// const display404 = (url, req, res) => {
//   const myHTML = `
//   <html>
//   <body>
//   <h1>404 Page Not Found</h1>
//   <p>the Page you were looking for ${url} was not found</p>
//   </body>
//   </html>
//   `;
// }



server.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}`);
});