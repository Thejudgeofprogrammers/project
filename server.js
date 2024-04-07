#!/usr/bin/env node
require('dotenv').config();
const express = require('express')
const path = require('path')
const routes = require('./src/server/routes/api.js');
// const middleware = require('./middleware.js')

const app = express()

const PORT = process.env.PORT ?? 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));

app.use('/', routes);

app.listen(PORT, () => console.log(`Server has been started http://localhost:${PORT}`))
