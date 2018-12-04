
var userInfo = require("../data/friends")

module.exports = function (app) {
  var users = []
  // API GET Request  
  app.get("/api/friends", function (req, res) {
    res.json(userInfo);
  });

  // API POST Requests
  app.post("/api/friends", function (req, res) {
    var newUser = req.body
    var matchedUser = 0;
    var bestMatch = {};
    var bestMatchScore = 40;

    for (let f = 0; f < userInfo.length; f++) {
      var totalDiff = 0;
      // Loop thorugh each friends scores
      for (let s = 0; s < userInfo[f].scores.length; s++) {
        var diff = Math.abs(parseInt(userInfo[f].scores[s]) - parseInt(newUser.scores[s]));
        totalDiff += diff;
      } // end inner loop
      // check to see if above logic works accurately
      console.log(totalDiff, userInfo[f].name)

      if (totalDiff < bestMatchScore) {
        matchedUser = f;
        bestMatchScore = totalDiff;
      }
    }
    bestMatch = userInfo[matchedUser];

    //return best match as JSON
    res.json(bestMatch);

    userInfo.push(newUser)
  });
};