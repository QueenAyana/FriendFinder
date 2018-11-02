

var userInfo = require("../data/friends")

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {
    // API GET Request  
    app.get("/api/friends", function(req, res) {
      res.json(userInfo);
    });
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
  
    app.post("/api/friends", function(req, res) {
      var newUser = req.body
      var sum = 0
      var difference
      var score = userInfo.scores
      // need to make the for loop to compare the users survey scores and push them into the difference variable
      //so as to add them up and push that to the sum variable so as to locate the best match in the database for the new user
      console.log(req.body)
      console.log(newUser)
    });
  };