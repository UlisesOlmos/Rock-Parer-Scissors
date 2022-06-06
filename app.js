'use strict';

const express = require('express');
const path = require('path');

const app = express();

// Setups
app.set('port', 3000);
app.set('view engine', 'pug');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/',(req,res)=> res.render('index'))

// Middleware error 404
app.use((req, res, next) => res.status(404).render('404'));

// Server Listening
app.listen(app.get('port'), () => console.log(`Server en http://localhost:${app.get('port')}`));