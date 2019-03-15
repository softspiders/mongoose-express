const express = require("express");
const app = express();

app.get("/", function(req, res) {

  const uri = "YOUR_MONGODB_URI";
  
  require('mongoose').connect(uri, { useNewUrlParser: true })
    .then(() => {
      res.send('MongoDB Connected')
    })
    .catch(err => {
      res.send(err)
    });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {});

console.log("Server running at http://localhost:%d", port);
