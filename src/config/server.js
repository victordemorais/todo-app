const http = require('http');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');
var path = require('path');

var bodyParser = require('body-parser');
const todoRoute = require('../api/routes/todo');



app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

app.use('/api/todo', todoRoute);

http.createServer(app).listen(port);
console.log("Servidor rodando na porta: %s %s", port, new Date());