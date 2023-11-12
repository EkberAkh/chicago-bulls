require("dotenv").config();

const http = require("http");
const app = require("./src/app");
require("dotenv").config();

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("HTTP server listening on port 8080!");
});
