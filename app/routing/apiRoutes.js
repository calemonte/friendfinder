"use strict";

const path = require("path");
const friends = require("../data/friends");

module.exports = function(app) {

    app.route("/api/friends")
    .get((req, res) => {
        console.log("API get request successful.");
        res.send(friends.allFriends);
    })
    .post((req, res) => {
        console.log("API post request successful.");
        res.send("API post successful");
    });
    
};