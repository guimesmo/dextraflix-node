const express = require('express');
const app = express();
const default_port = 3300

app.get('/', function(req, res) {
    res.send("Bem vindo ao Dextraflix!");
});

app.listen(default_port, function() {
    console.log("Rodando!");
});
