"use strict";
const express = require("express");
const router = require("./router/routes");
class Server {
    constructor() {
        this.app = express();
        this.run();
    }
    static bootstrap() {
        return new Server();
    }
    run() {
        this.app.use("/", router);
    }
}
var server = Server.bootstrap();
module.exports = server.app;
