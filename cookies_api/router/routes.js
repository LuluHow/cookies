"use strict";
const express = require("express");
const request = require("request");
const cookie_parser = require("cookie-parser");
let router = express.Router();
let isSignedIn = false;
let cookie;
router.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
router.use(cookie_parser());
router.get("/", (req, res) => {
    res.send("WELCOME");
})
    .get("/user/:login", (req, res) => {
    if (!isSignedIn) {
        request({
            url: "https://intra.epitech.eu/?format=json",
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            form: { login: "horem_l", password: "-5-rl_dO" }
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                isSignedIn = true;
                cookie = response.headers['set-cookie'][0].split(';')[0];
                request({
                    url: `https://intra.epitech.eu/user/${req.params.login}/?format=json`,
                    method: "GET",
                    headers: { "Cookie": cookie }
                }, (error, response, body) => {
                    if (!error && response.statusCode === 200) {
                        res.send(body);
                    }
                });
            }
        });
    }
    else {
        request({
            url: `https://intra.epitech.eu/user/${req.params.login}/?format=json`,
            method: "GET",
            headers: { "Cookie": cookie }
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        });
    }
});
module.exports = router;
