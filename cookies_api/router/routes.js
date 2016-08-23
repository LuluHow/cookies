"use strict";
const express = require("express");
let router = express.Router();
router.get("/", (req, res) => {
    res.send("WELCOME");
})
    .get("/coucou/:name", (req, res) => {
    res.send(`Coucou ${req.params.name}`);
});
module.exports = router;
