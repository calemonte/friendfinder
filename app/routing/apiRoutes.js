const path = require("path");
const friends = require("../data/friends");

module.exports = function(app) {

    app.route("/api/friends")
    .get((req, res) => {
        console.log("API get request successful.");
    })
    .post((req, res) => {
        console.log("API post request successful.");
    });
    
};