const express = require('express');

const app = express();

app.get('/',(request,response)=>response.status(200).send('OLA MUNDO'));
app.get('/teste', (req, res) => res.send('Hello')); // Forma abreviada comum

module.exports = app;

