/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";

let router = express.Router();

router.get("/", (req, res) => {
	res.send("WELCOME");
})

.get("/coucou/:name", (req, res) => {
	res.send(`Coucou ${req.params.name}`);
});

export = router;