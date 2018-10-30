// =======================DEPENDECIES=============================//

var express = require("express");

// =======================EXPRESS APP=============================//

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended :true}));
app.use(express.json());

//=======================ROUTING=================================//

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//=======================LISTENER=================================//

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });