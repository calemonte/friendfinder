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
        const match = calculateCompability(newFriend, friends.allFriends, data.max);

        friends.allFriends.push(newFriend);
        console.log("API post request successful.");

        res.json(match);
    });

    // Calculate the combability of all available friends and return the best match.
    function calculateCompability(newFriend, allFriends, max) {
        let matchTotal = max;
        let finalMatch = {};

        for (let i = 0; i < allFriends.length; i++) {
            
            // Step over the loop if we match ourself.
            // NOTE: Should capture what the last submission was and not display it, as opposed to not matching on the Id. Something for later...
            if (allFriends[i].id === newFriend.id) {
                continue;
            }

            const currentDifference = Math.abs(allFriends[i].totalScore() - newFriend.totalScore());

            if (currentDifference <= matchTotal) {
                matchTotal = currentDifference;
                finalMatch = allFriends[i];
            }

        }
        return finalMatch;
    }
};