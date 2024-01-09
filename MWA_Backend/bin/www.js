//this file is used in order to create and display the JSON information through the server port 8900 on the localhost.

const app = require("../app");
const http = require("http");

const port = process.env.PORT || "8900";
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
