const http = require("http");
const fs = require("fs");
const { log } = require("console");

const PORT = 8001;

const handelRequest = (req, res) => {
  let fileName = "";

  switch (req.url) {
    case "/":
      fileName = "./pages/index.html";
      break;
    case "/about":
      fileName = "./pages/about.html";
      break;
    case "/contect":
      fileName = "./pages/contect.html";
      break;
    case "/blogs":
      fileName = "./pages/blogs.html";
      break;

    default:
      break;
  }

  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
};

const server = http.createServer(handelRequest);

server.listen(PORT, (errors) => {
  if (errors) {
    console.log("Error in starting server");
    return false;
  }
  console.log("Server started on port no " + PORT);
});
