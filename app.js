"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index', { title: "Git & Node.js" });
});

app.listen(8000, () => {
    console.log("Start Server...");
});