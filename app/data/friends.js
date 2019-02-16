"use strict";

class Friend {
    constructor(name, photo, bio, scores) {
        this.name = name;
        this.photo = photo;
        this.bio = bio;
        this.scores = scores;
    }
}

let allFriends = [
    new Friend("Mark", "https://m.media-amazon.com/images/M/MV5BNDQyNzMzZTMtYjlkNS00YzFhLWFhMTctY2M4YmQ1NmRhODBkXkEyXkFqcGdeQXVyNjcyNzgyOTE@._V1_UY317_CR20,0,214,317_AL_.jpg", "Actor with passion for starring as a big green dude in action flicks.", [5, 1, 10, 9, 5]), 

    new Friend("Mary", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mary_Poppins5.jpg/250px-Mary_Poppins5.jpg", "Child care expert who loves to watch the sun set over a dusty road", [5, 8, 1, 9, 10]),

    new Friend("William", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Prince_William_and_Duchess_Kate_of_Cambridge_visits_Sweden_02_%28cropped_2%29.jpg/220px-Prince_William_and_Duchess_Kate_of_Cambridge_visits_Sweden_02_%28cropped_2%29.jpg", "Posh dad with a pretty famous pedigree", [10, 10, 10, 10, 10]),

    new Friend("Serena", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Serena_Williams_at_2013_US_Open.jpg/440px-Serena_Williams_at_2013_US_Open.jpg", "Superstar athlete and mom with interest in racquet sports", [4, 10, 1, 10, 5])
];

module.exports.Friend = Friend;
module.exports.allFriends = allFriends;