"use strict";

class Friend {
  constructor(name, photo, bio, scores) {
    this.id = Math.floor(Math.random() * 50000000); // Assign a fairly large random id.
    this.name = name;
    this.photo = photo;
    this.bio = bio;
    this.scores = scores;
    this.totalScore = this.totalScore.bind(this);
  }

  totalScore() {
    let sum = 0;
    this.scores.forEach(element => {
      sum += parseInt(element);
    });
    return sum;
  }
}

let allFriends = [
  new Friend(
    "Mark",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mark_Ruffalo_in_2017_by_Gage_Skidmore.jpg/440px-Mark_Ruffalo_in_2017_by_Gage_Skidmore.jpg",
    "I'm an American actor, filmmaker, and social activist. I made my screen debut in an episode of CBS Summer Playhouse, followed by minor film roles. I was part of the original cast of This Is Our Youth, for which I was nominated for an Independent Spirit Award.",
    [5, 1, 10, 9, 5, 10, 5, 2, 8, 7]
  ),

  new Friend(
    "Mary",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mary_Poppins5.jpg/250px-Mary_Poppins5.jpg",
    "I'm a magical and loving woman who is known to descend from the clouds in response to children's advertisement for a nanny. I am firm in my use of authority but gentle and kind as well.",
    [5, 8, 1, 9, 10, 2, 5, 7, 10, 10]
  ),

  new Friend(
    "William",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Prince_William_and_Duchess_Kate_of_Cambridge_visits_Sweden_02_%28cropped_2%29.jpg/220px-Prince_William_and_Duchess_Kate_of_Cambridge_visits_Sweden_02_%28cropped_2%29.jpg",
    "Good day, I'm the Duke of Cambridge and a member of the British royal family. I'm the elder son of Charles, Prince of Wales, and Diana, Princess of Wales, and since birth I've been second in the line of succession to the British throne, after my father.",
    [0, 10, 0, 1, 5, 0, 4, 4, 1, 0]
  ),

  new Friend(
    "Serena",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Serena_Williams_at_2013_US_Open.jpg/440px-Serena_Williams_at_2013_US_Open.jpg",
    "I'm one of the most decorated female American professional tennis player ever. The Women's Tennis Association ranked me world No. 1 in singles on eight separate occasions between 2002 and 2017. I reached the No. 1 ranking for the first time on July 8, 2002. I hold the most Grand Slam titles in singles, doubles, and mixed doubles combined among active players",
    [0, 4, 10, 1, 10, 5, 2, 0, 10, 10]
  ),

  new Friend(
    "Grace",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/440px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
    "I'm an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, I was a pioneer of computer programming who invented one of the first compiler related tools. I popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today.",
    [10, 10, 10, 10, 10, 0, 10, 10, 10, 0]
  ),

  new Friend(
    "Scott",
    "https://upload.wikimedia.org/wikipedia/en/3/39/ScottPilgrim.jpg",
    "I'm 23 years old and play bass in Sex Bob-Omb, a totally awesome garage band. I used to date Knives Chau, but now I'm going steady with Ramona Flowers, the most baddass girl in Toronto.",
    [10, 10, 10, 0, 10, 0, 10, 0, 10, 0]
  )
];

module.exports.Friend = Friend;
module.exports.allFriends = allFriends;
