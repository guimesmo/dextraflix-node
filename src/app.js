const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const default_port = 3300

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);


app.listen(default_port, function() {
    console.log("Rodando!");
});
