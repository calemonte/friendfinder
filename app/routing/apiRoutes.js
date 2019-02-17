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
        const match = calculateCompability(newFriend, friends.allFriends);

        friends.allFriends.push(newFriend);
        console.log("API post request successful.");

        res.json(match);
    });

    // Calculate the combability of the available friends and return the best match.
    function calculateCompability(newFriend, allFriends) {
        let matchTotal = 100;
        let finalMatch = {};

        for (let i = 0; i < allFriends.length; i++) {
            
            // Return false if we are trying to match the same friend.
            if (allFriends[i].id === newFriend.id) {
                return false;
            }

            const currentDifference = Math.abs(allFriends[i].totalScore - newFriend.totalScore);

            if (currentDifference < matchTotal) {
                matchTotal = currentDifference;
                finalMatch = allFriends[i];
            }

        }
        return finalMatch;
    }
};