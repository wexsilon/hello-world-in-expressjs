"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));