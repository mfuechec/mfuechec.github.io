let express = require('express');
let app = express();
let path = require('path');
let port = process.env.PORT || 4001;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, console.log(`Listening on port ${port}`));