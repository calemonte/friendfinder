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
        const data = req.body;
        const newFriend = new friends.Friend(data.name, data.photo, data.bio, data.scores);
        friends.allFriends.push(newFriend);
        console.log("API post request successful.");
        res.json(newFriend);
    });

    function calculateCompability(newFriend, allFriends) {
        let newFriendScore = 0;
        for (let scores in newFriend) {

        }
        
    }
    
};