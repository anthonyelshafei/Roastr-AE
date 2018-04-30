const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var session = require('express-session');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const socket = require('socket.io');

app.use(session({secret: "its a secret",
                 saveUninitialized: true,
                 resave: false
}));

app.get("/api/sessioninfo", function(req, res){
  res.json(req.session.user)
})


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/roastr",
  {
    useMongoClient: true
  }
);

// Start the API server
server = app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);


// socket.io stuff

// server = app.listen(PORT, function(){
//     console.log('Socket.io server is running on port ${PORT}')
// });

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});