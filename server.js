const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, '/static/')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("chat UI Server Listening on " + port);
});
